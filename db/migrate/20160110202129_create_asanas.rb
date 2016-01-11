class CreateAsanas < ActiveRecord::Migration
  def change
    create_table :asanas do |t|
    	t.string :sanskrit_name
    	t.string :english_name
    	t.string :img_url
      t.timestamps null: false
    end
  end
end
