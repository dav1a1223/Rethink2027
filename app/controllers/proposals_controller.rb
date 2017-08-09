class ProposalsController < ApplicationController
  before_action :set_proposal, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  # GET /proposals
  # GET /proposals.json
  def index
    @proposals = Proposal.all
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
    if params[:submit_proposal]
      render :new, notice: "請先儲存提案再提交您的提案"
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
    respond_to do |format|
      if @proposal.update(proposal_params)
        flash[:notice] = "您的提案已更新成功！"
        format.html { redirect_to @proposal }
        format.json { render :show, status: :ok, location: @proposal }
      else
        format.html { render :edit }
        format.json { render json: @proposal.errors, status: :unprocessable_entity }
      end
    end
  end

  def submit
    if params[:id] == "0"
      # format.html { redirect_to , notice: '請先儲存再提交您的提案' }
    else
      @proposal = Proposal.find(params[:id])
      @proposal.is_submit = true
      @proposal.save!
      redirect_to @proposal
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
      params.fetch(:proposal, {}).permit(:description, :user_id, :action_name, :action_intro, :action_location,
      :how_can_we, :excitement, :image,
      :members_attributes => [:id, :name, :birthday, :phone, :email])
    end
end
