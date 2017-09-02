Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :proposals do
    collection do
      get "attention"
      get "random_proposal"
      get "random_excitement"
    end

    member do
      put "submit"
    end
  end

  get "proposal_redirect", to: "proposals#proposal_redirect", as: "proposal_redirect"

  get "about", to: "homepage#about"
  get "about_action", to: "homepage#about_depath"
  get "about_book", to: "homepage#about_depath"
  get "about_spirit", to: "homepage#about_depath"
  get "about_step", to: "homepage#about_depath"
  get "about_time", to: "homepage#about_depath"
  get "about_triangle", to: "homepage#about_depath"
  get "activities", to: "homepage#activities"

  get "partner", to: "homepage#partner"
  get "partner_one", to: "homepage#partner_depath"
  get "partner_two", to: "homepage#partner_depath"
  get "partner_three", to: "homepage#partner_depath"
  get "partner_four", to: "homepage#partner_depath"
  get "partner_five", to: "homepage#partner_depath"
  # get "partner_six", to: "homepage#partner_depath"
  # get "partner_seven", to: "homepage#partner_depath"
  # get "partner_eight", to: "homepage#partner_depath"
  # get "partner_nine", to: "homepage#partner_depath"

  devise_for :users, controllers: {omniauth_callbacks: "users/omniauth_callbacks", sessions: 'users/sessions'}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "homepage#index"
end
