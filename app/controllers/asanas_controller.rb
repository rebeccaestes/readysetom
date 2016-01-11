class AsanasController < ApplicationController

	def index
		@asanas = Asana.all
	end

	def browse
		@asanas = Asana.all
	end


end