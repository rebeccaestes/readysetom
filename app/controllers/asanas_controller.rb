class AsanasController < ApplicationController

	def index
		@asanas = Asana.all
		@asana = Asana.new
	end

end