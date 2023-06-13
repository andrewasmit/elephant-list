Rails.application.routes.draw do
  resources :chatrooms, only: [:create, :destroy]
  resources :users, only: [:create, :update, :index, :destroy]
  resources :donations, only: [:create]
  resources :messages, only: [:create, :update, :destroy]
  resources :reviews, only: [:create, :update]
  resources :posts, only: [:create, :index, :show]

  post '/login', to: 'session#create'
  delete 'logout', to: 'session#destroy'
  post 'signup', to: 'users#create'
  get '/me', to: 'users#my_profile'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
