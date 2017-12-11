class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :nerd_type
      t.boolean :active

      t.timestamps
    end
  end
end
