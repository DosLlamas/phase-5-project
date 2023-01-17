Rails.application.routes.draw do
  resources :medications
  resources :patient_medications
  resources :patients, only: [:index, :show, :update, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/hello', to: 'application#hello_world'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'patients#create'
  delete '/logout', to:'sessions#delete' 
  get '/authorized_user', to: 'patients#show'

  # handles requests that aren't for the app's API routes by returning public/index.html
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
