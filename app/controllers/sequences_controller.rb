class SequencesController < ApplicationController

	def index
		@current_user = current_user
		@sequences = Sequence.where(user: @current_user)
	end

	def show
		@current_user = current_user
		@sequence = Sequence.find(params[:id])
		@asanas = Asana.all
    @asanas_in_seq = @sequence.asanas
    puts "COFFEEEEEE!"
    puts @asanas_in_seq.as_json
	end

  def new
    @sequence = Sequence.new
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
    @sequence.destroy
    redirect_to sequence_url
  end

  def add_asana
    @sequence = Sequence.find(params[:id])
    @sequence.sequence_entries.create(asana_id: params[:asana_id])
    redirect_to @sequence
  end

  def remove_asana
    @sequence = Sequence.find(params[:id])
    entries = @sequence.sequence_entries.where(asana_id: params[:asana_id]).destroy_all
    redirect_to @sequence
  end

  private
  def sequence_params
    params.require(:sequence).permit(:name)
  end

end