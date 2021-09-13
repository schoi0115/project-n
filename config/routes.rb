Rails.application.routes.draw do
 
  resources :new_notes
  resources :users
  resources :patients, only: [:create, :index, :show]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  
  post "/patients/new", to: "patients#create"
  get "/patients", to: "patients#index"
  get "/patients/:id", to: "patients#show"
  # patch "/patients/:id/discharge", to: "patients"

  # get "/new_notes", to: "new_notes#create"
  

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
