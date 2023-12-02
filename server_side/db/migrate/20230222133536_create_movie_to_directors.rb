class CreateMovieToDirectors < ActiveRecord::Migration[7.0]
  def change
    add_reference :movies, :director, index: true
  end
end
