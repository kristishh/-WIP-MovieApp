class ChangeReleaseDateType < ActiveRecord::Migration[7.0]
  def change
    change_column :movies, :release_date, :date
  end
end
