Rails.application.routes.draw do
  resources :users
  resources :transactions
  resources :messages
  resources :reviews
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
