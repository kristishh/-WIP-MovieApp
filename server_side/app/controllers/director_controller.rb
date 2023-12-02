class DirectorController < ApplicationController
  def index
    @directors = Director.all
  end

  def create
    if Director.find_by(first_name: params[:first_name], last_name: params[:last_name]).presents?
      return render status: :bad_request, json: { error: 'Director already exists.' }
    end
    Director.create(
      first_name: params[:first_name],
      last_name: params[:last_name],
    )
  end
end
