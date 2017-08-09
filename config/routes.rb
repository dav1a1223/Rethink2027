Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :proposals do
    collection do
      get "attention"
    end

    member do
      put "submit"
    end
  end

  get "about", to: "homepage#about"
  get "about_action", to: "homepage#about_depath"
  get "about_book", to: "homepage#about_depath"
  get "about_spirit", to: "homepage#about_depath"
  get "about_step", to: "homepage#about_depath"
  get "about_time", to: "homepage#about_depath"
  get "about_triangle", to: "homepage#about_depath"

  devise_for :users, controllers: {omniauth_callbacks: "users/omniauth_callbacks"}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "homepage#index"
end
