class CreateMovie < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :description
      t.datetime :release_date, null: false
      t.string :genre, null: false
      t.timestamps null: false
    end
  end
end
