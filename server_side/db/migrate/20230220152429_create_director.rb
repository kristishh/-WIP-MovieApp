class CreateDirector < ActiveRecord::Migration[7.0]
  def change
    create_table :directors do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.datetime :director_created_at, default: Time.now
      t.datetime :director_updated_at, default: Time.now
    end
  end
end
