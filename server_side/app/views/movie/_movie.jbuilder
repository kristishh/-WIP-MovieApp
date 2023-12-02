json.extract! movies,
  :id,
  :title,
  :genres,
  :description,
  :release_date,
  :created_at,
  :updated_at,
  :director_id,
  :first_name,
  :last_name

begin
  profile_image = if movies.poster.attached? 
    # m = movies.poster.variant(resize_to_limit: "400x400", crop: '200x300+0+0')
    rails_blob_url(movies.poster)
                  else
                    nil
                  end
rescue ActiveStorage::FileNotFoundError
  profile_image = nil
end

json.profile_image profile_image

