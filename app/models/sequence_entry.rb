class SequenceEntry < ActiveRecord::Base
	belongs_to :asana
	belongs_to :sequence
end
