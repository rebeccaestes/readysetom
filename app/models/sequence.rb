class Sequence < ActiveRecord::Base
	has_many :sequence_entries
	has_many :asanas, through: :sequence_entries
	belongs_to :user
end
