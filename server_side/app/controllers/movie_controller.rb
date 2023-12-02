class MovieController < ApplicationController
  def index
    @field = params[:field].presence || 'id'
    @order = params[:order].presence || 'desc'

    @pagy, @movies = pagy(Movie.joins(:director)
      .select('movies.*, directors.first_name, directors.last_name')
      .order(@field => @order), page: params[:page])
    @current_page = @pagy.page
    @total_count = @pagy.count
  end

  def create
    if Movie.where(title: create_params[:title]).exists?
      return render status: :bad_request, json: { error: 'This movie already exists.' }
    end

    director = Director.find_by(director_names)
    if director.nil?
      return render status: :bad_request, json: { error: "Director doesn't exists." }
    end

    movie = Movie.create(create_params)
    movie.update(director_id: director.id)
  end

  def upload_poster
    movie = Movie.find_by_title(upload_params[:title])
      .update(poster: upload_params[:poster])
  end

  private

  def create_params
    params[:movie][:genres] ||= []

    params.require(:movie)
      .permit(
        :title,
        :release_date,
        :description,
        genres: [],
      )
  end

  def upload_params
    params.require(:attachments)
      .permit(
        :title,
        :poster,
      )
  end

  def director_names
    params.require(:director_names)
      .permit(
        :first_name,
        :last_name,
      )
  end
end
