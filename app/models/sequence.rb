class Sequence < ActiveRecord::
	has_many :sequence_entries
	belongs_to :user
end
