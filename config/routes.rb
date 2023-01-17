Rails.application.routes.draw do
  resources :medications
  resources :patient_medications
  resources :patients, only: [:index, :show, :update, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/hello', to: 'application#hello_world'
  get '/authorized_user', to: 'patients#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete' 
  post '/signup', to: 'patients#create'
  patch '/update_profile', to: 'patients#update'
  delete 'destroy-user', to: 'patients#destroy'

  # handles requests that aren't for the app's API routes by returning public/index.html
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
