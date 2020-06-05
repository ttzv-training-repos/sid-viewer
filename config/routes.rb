Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :ad_users
post 'ad_users/sid_api', to: 'ad_users#sid_api'
end
