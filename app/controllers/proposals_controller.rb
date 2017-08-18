class ProposalsController < ApplicationController
  before_action :set_proposal, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :check_identity, only: [:edit, :update, :destroy]
  before_action :check_show_identity, only: [:show]

  # GET /proposals
  # GET /proposals.json
  def index
    @proposals = Proposal.published
    if current_user&.proposal
      if @proposals.include? current_user.proposal
        without_selfs = @proposals.reject { |pp| pp == current_user.proposal }
        @proposals = [current_user.proposal] + without_selfs
      end
    end
    if current_user&.proposal&.is_submit && !(current_user&.proposal&.publish)
      @proposals = [current_user.proposal] + @proposals
    end
  end

  # GET /proposals/1
  # GET /proposals/1.json
  def show
  end

  # GET /proposals/new
  def new
    if current_user&.proposal
      @proposal = current_user.proposal
      render :edit
    end
    @proposal = Proposal.new
  end

  # GET /proposals/1/edit
  def edit
    if current_user.proposal.publish
      flash[:notice] = "若您重新儲存提案則需重新提交/審核哦！"
    end
  end

  # POST /proposals
  # POST /proposals.json
  def create
    @proposal = Proposal.new(proposal_params)
    @proposal.user = current_user
    # hash_tags_process(@proposal)
    if params[:submit_proposal]
      if @proposal.id.nil?
        render :new, notice: "請先儲存提案再提交您的提案"
      else
        if proposal_check
          @proposal.is_submit = true
          @proposal.publish = false
          @proposal.save!
          redirect_to @proposal, notice: "恭喜你踏出了行動的第一步！提交已經送交審核程序，您將會於 2-3 天內收到審核結果通知信喔！"
        else
          render :edit, notice: "仍有欄位尚未填寫完成，請再檢查有「*」的欄位是否都填寫。"
        end
      end
    else
      respond_to do |format|
        if @proposal.save
          format.html { redirect_to @proposal, notice: '草稿儲存成功！迴響提醒您，讓大家快快採取行動是我們鼓勵行動的方式，儘早填寫完並送出提案，就能更快取得充滿驚喜的下一步指示喔！' }
          format.json { render :show, status: :created, location: @proposal }
        else
          format.html { render :new }
          format.json { render json: @proposal.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # PATCH/PUT /proposals/1
  # PATCH/PUT /proposals/1.json
  def update
    # hash_tags_process(@proposal)
    @proposal.hashtags.delete_all
    @proposal.assign_attributes(proposal_params)
    @proposal.publish = false
    @proposal.is_submit = false
    if params[:submit_proposal]
      if proposal_check
        @proposal.is_submit = true
        @proposal.publish = false
        @proposal.save!
        redirect_to root_path, notice: "恭喜你踏出了行動的第一步！提交已經送交審核程序，您將會於 2-3 天內收到審核結果通知信喔！"
      else
        render :edit
      end
    else
      respond_to do |format|
        if @proposal.save!
          format.html { redirect_to root_path, notice: "草稿儲存成功！迴響提醒您，讓大家快快採取行動是我們鼓勵行動的方式，儘早填寫完並送出提案，就能更快取得充滿驚喜的下一步指示喔！" }
          format.json { render :show, status: :ok, location: @proposal }
        else
          format.html { render :edit }
          format.json { render json: @proposal.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # DELETE /proposals/1
  # DELETE /proposals/1.json
  def destroy
    @proposal.destroy
    respond_to do |format|
      format.html { redirect_to proposals_url, notice: 'Proposal was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def attention
    render template: "proposals/attention"
  end

  def random_proposal
    @proposal = Proposal.published.order("RANDOM()").limit(1).first
    render partial: "proposals/proposal"
  end

  def proposal_redirect
    if !user_signed_in?
      redirect_to new_user_session_path
    elsif current_user.proposal.nil?
      redirect_to attention_proposals_path
    elsif current_user.proposal.checking?
      redirect_to proposals_path
    else
      redirect_to attention_proposals_path
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_proposal
      @proposal = Proposal.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def proposal_params
      params[:proposal][:members_attributes].each do |k ,v|
        if v["name"].blank? || v["phone"].blank? || v["email"].blank?
          params[:proposal][:members_attributes].delete(k)
        end
      end
      tags = Charwidth.normalize(params[:hashtags]).split(" ")
      tags_hash = {}
      tags.each_with_index do |tag, i|
        tags_hash[i.to_s] = { "text": processed_tag(tag) }
      end
      params[:proposal][:hashtags_attributes] = tags_hash
      params.fetch(:proposal, {}).permit(:description, :user_id, :action_name, :action_intro, :action_location,
      :how_can_we, :excitement, :image,
      :members_attributes => [:id, :name, :birthday, :phone, :email],
      :hashtags_attributes => [:id, :text])
    end

    def proposal_check
      pp = @proposal
      column_exist = (pp.description.present? && pp.action_intro.present? && pp.action_name.present? && pp.action_location.present? && pp.how_can_we.present? && pp.excitement.present? && pp.image.file.present?)
      unless column_exist
        flash[:notice] = "仍有欄位尚未填寫完成，請再檢查有「*」的欄位是否都填寫。"
      end
      members_valid = (pp.members.count >= 2) && members_not_repeated(pp)
      unless members_valid
        if pp.members.count < 2
          flash[:notice] = "您的提案成員至少需兩人。"
        else members_not_repeated(pp)
          flash[:notice] = "您的提案成員至少有一人已參與其他提案。"
        end
      end
      column_exist && members_valid
    end

    def members_not_repeated(proposal)
      all_members_info = Member.all.reject{ |m| m.proposal == proposal }.pluck(:name, :phone)
      proposal.members.each do |member|
        if all_members_info.include?([member.name, member.phone])
          return false
        end
      end
      return true
    end

    def hash_tags_process(proposal)
      tags = params[:hashtags].split(" ")
      # proposal_tags = proposal.hashtags.pluck(:text)
      proposal.hashtags.delete_all
      tags.each do |tag|
        # if !proposal_tags.include?(tag)
        proposal.hashtags.create(text: processed_tag(tag))
        # end
      end
    end

    def processed_tag(tag)
      (tag[0] != "#") ? ("#" + tag) : tag
    end

    def check_identity
      unless @proposal&.user == current_user
        redirect_to :root
      end
    end

    def check_show_identity
      if !@proposal.publish && @proposal.user != current_user
        redirect_to :root
      end
    end
end
