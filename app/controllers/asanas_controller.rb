class AsanasController < ApplicationController

	def home
		@asanas = Asana.all
	end

	def index
		@asanas = Asana.all
	end


end