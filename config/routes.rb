# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  resources :courses do
    resources :questions, except: [:show]
    resources :steps, only: %i[create update destroy edit]
  end

  devise_for :teachers, path: 'teachers'
  devise_for :students, path: 'students'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
