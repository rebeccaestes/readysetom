class Sequence < ActiveRecord::
	has_many :asanas
	belongs_to :user
end
