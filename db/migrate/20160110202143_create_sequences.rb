class CreateSequences < ActiveRecord::Migration
  def change
    create_table :sequences do |t|
    	t.string "name"
      t.timestamps null: false
      t.references "asana" 
      # ????
    end
  end
end
