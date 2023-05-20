Rails.application.routes.draw do
  resources :chatrooms
  resources :users
  resources :donations
  resources :messages
  resources :reviews
  resources :posts

  post '/login', to: 'session#create'
  delete 'logout', to: 'session#destroy'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
