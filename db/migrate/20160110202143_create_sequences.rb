class CreateSequences < ActiveRecord::Migration
  def change
    create_table :sequences do |t|
    	t.string "name"
      t.boolean "public"
      t.references "asana" 
      t.timestamps null: false
    end
  end
end
