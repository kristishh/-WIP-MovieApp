class Movie < ApplicationRecord
  belongs_to :director
  has_one_attached :poster
end
