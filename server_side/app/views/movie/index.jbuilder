json.movies do
  json.array! @movies, partial: 'movie', as: :movies
end

json.current_page @current_page
json.total_count @total_count
json.field @field
json.order @order
