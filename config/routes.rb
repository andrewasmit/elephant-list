Rails.application.routes.draw do
  resources :chatrooms
  resources :users
  resources :donations
  resources :messages
  resources :reviews
  resources :posts

  post '/login', to: 'session#create'
  delete 'logout', to: 'session#destroy'
  get '/me', to: 'users#my_profile'
  # post '/chatrooms/:id', to: 'chatrooms#create_new_thread'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
