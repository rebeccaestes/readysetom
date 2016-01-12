class CreateSequenceEntries < ActiveRecord::Migration
  def change
    create_table :sequence_entries do |t|
      t.references :asana, index: true, foreign_key: true 
      t.references :sequence, index: true, foreign_key: true
      t.integer :order
      t.timestamps null: false
    end
  end
end
