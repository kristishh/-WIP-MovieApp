Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :director, only: [:create, :index]
  resources :movie, only: [:create, :index] do
    collection do
      post :upload_poster 
    end
  end
end
