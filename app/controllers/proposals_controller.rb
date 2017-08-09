class ProposalsController < ApplicationController
  before_action :set_proposal, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  before_action :check_identity, only: [:edit, :update, :destroy]
  before_action :check_show_identity, only: [:show]

  # GET /proposals
  # GET /proposals.json
  def index
    @proposals = Proposal.published
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
          redirect_to @proposal, notice: "提案已提交"
        else
          render :edit, notice: "欄位尚未填寫完成"
        end
      end
    else
      respond_to do |format|
        if @proposal.save
          format.html { redirect_to @proposal, notice: '您的提案已儲存成功！' }
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
    if params[:submit_proposal]
      if proposal_check
        @proposal.is_submit = true
        @proposal.publish = false
        @proposal.save!
        redirect_to @proposal, notice: "提案已提交"
      else
        render :edit, notice: "欄位尚未填寫完成"
      end
    else
      respond_to do |format|
        if @proposal.save!
          flash[:notice] = "您的提案已更新成功！"
          format.html { redirect_to @proposal }
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
      tags = params[:hashtags].split(" ")
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
      members_valid = (pp.members.count >= 1) && members_not_repeated(pp)
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
