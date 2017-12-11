class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :nerd_type
      t.boolean :active

      t.timestamps
    end
  end
end
