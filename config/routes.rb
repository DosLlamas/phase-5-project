Rails.application.routes.draw do
  resources :medications
  resources :patient_medications, only: [:user_index, :sort_by_meds, :sort_by_provider]
  resources :patients, only: [:index, :show, :update, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/hello', to: 'application#hello_world'
  get '/authorized_user', to: 'patients#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#delete' 
  post '/signup', to: 'patients#create'
  patch '/update_profile', to: 'patients#update'
  delete 'destroy-user', to: 'patients#destroy'
  get '/search_prescription', to: 'patient_medications#user_index'
  get '/sort_by_meds', to: 'patient_medications#sort_by_meds'
  get '/sort_by_provider', to: 'patient_medications#sort_by_provider'




  # handles requests that aren't for the app's API routes by returning public/index.html
  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
