class AsanasController < ApplicationController

	def home
		@asanas = Asana.all
		@current_user = current_user
	end

	def index
		@asanas = Asana.where(user: 1)

		respond_to do |format|
    	format.html { render :index }
      format.json { render json: @asanas }
    end
	end

	def new
		@current_user = current_user
		@asana = Asana.new
	end

	def create
		@current_user = current_user
		# @concert = Concert.create!(asana_params.merge(user: @current_user))
		redirect_to yours_path(@current_user), notice: "Asana created."
	end

	def edit
		@asana = Asana.find(params[:id])
		@owner = @asana.user
	end

	def update
		@current_user = current_user
		@asana = Asana.find(params[:id])
		@asana.update(asana_params.merge(user: @current_user))
		redirect_to yours_path(@current_user), notice: "Asana updated."
	end

	# def copy
	# 	@current_user = current_user
	# 	@other_asana = Asana.find(params[:id])
	# 	@your_asana = Asana.new(@other_asana.attributes.merge(user: @current_user)
	# 	redirect_to yours_path(@user), notice: "Asana saved."
	# end

	def show
		@current_user = current_user
		@your_asanas = Asana.where(user: @current_user)

		respond_to do |format|
    	format.html { render :show }
      format.json { render json: @your_asanas }
    end
	end

	def destroy
		@current_user = current_user
		@asana = Asana.find(params[:id])
		@asana.destroy
		# @concert.attendances.destroy_all
		redirect_to yours_path(@current_user), notice: "Concert deleted!"
	end

end