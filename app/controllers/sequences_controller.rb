class SequencesController < ApplicationController

	def index
		@current_user = current_user
		@user_sequences = Sequence.where(user: @current_user)
    # @public_sequences = Sequence.all
    @public_sequences = Sequence.where(public: true)
	end

	def show
		@current_user = current_user
		@sequence = Sequence.find(params[:id])
		@asanas = Asana.all
    @asanas_in_seq = @sequence.asanas
    @seq_owner = @sequence.user
    @seq_entries = @sequence.sequence_entries

    respond_to do |format|
      format.html { render :show}
      format.json { render json: @seq_entries.to_json}
    end
    
	end

  def new
    @sequence = Sequence.new
  end

  def edit 
    @sequence = Sequence.find(params[:id])
  end

  def update
    @current_user = current_user
    @sequence = Sequence.find(params[:id])
    @sequence.update(sequence_params)
    redirect_to sequence_path(params[:id]), notice: "Sequence edited."
  end

  def create
  	@current_user = current_user
    @sequence = Sequence.new(sequence_params.merge(user: @current_user))
    if @sequence.save
      redirect_to @sequence
    else
      render :new
    end
  end

  def destroy
    @sequence = Sequence.find(params[:id])
    @sequence.sequence_entries.destroy_all
    @sequence.destroy
    redirect_to sequences_path
  end

  def add_asana
    @sequence = Sequence.find(params[:id])
    if @sequence.sequence_entries.length == 0 
      @sequence.sequence_entries.create(asana_id: params[:asana_id], order: 1)
    else
      @sequence.sequence_entries.create(asana_id: params[:asana_id], order: @sequence.sequence_entries.last.order + 1)
    end
    redirect_to @sequence
  end

  def remove_asana
    @sequence = Sequence.find(params[:id])
    @sequence.sequence_entries.find(params[:seq_id]).destroy
    redirect_to @sequence
  end

  private
  def sequence_params
    params.require(:sequence).permit(:name, :public)
  end

end