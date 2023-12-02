class ChangeGenreNameAndType < ActiveRecord::Migration[7.0]
  def change
    change_column :movies, :genres, :text, array: true, default: []
  end
end
