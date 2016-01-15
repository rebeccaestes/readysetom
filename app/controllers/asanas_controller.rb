class AsanasController < ApplicationController

	def your_asanas
		@current_user = current_user
		@your_asanas = Asana.where(user: @current_user)

		respond_to do |format|
    	format.html { render :your_asanas }
      format.json { render json: @your_asanas.to_json }
    end
	end

	def home
		@asanas = Asana.all
		@current_user = current_user
	end

	def index
		@current_user = current_user
		@asanas = Asana.where(user: 1)

		respond_to do |format|
    	format.html { render :index }
      format.json { render json: @asanas.to_json }
    end
	end

	def new
		@current_user = current_user
		@asana = Asana.new
	end

	def create
		@current_user = current_user
		@asana = Asana.create!(asana_params.merge(user: @current_user))
		redirect_to your_asanas_path, notice: "Asana created."
	end

	def update
		@current_user = current_user
		@asana = Asana.find(params[:id])
		@asana.update(asana_params.merge(user: @current_user))
		redirect_to your_asanas_path, notice: "Asana updated."
	end

	def show
		@asana = Asana.find(params[:id])
		@owner = @asana.user
		@current_user = current_user
	end

	def destroy
		@current_user = current_user
		@asana = Asana.find(params[:id])
		@asana.destroy
		redirect_to your_asanas_path, notice: "Asana deleted!"
	end

	private
	def asana_params
		params.require(:asana).permit(
			:sanskrit_name,
			:english_name,
			:image_url,
			:user_id )
	end

end