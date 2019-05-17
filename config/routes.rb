# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  resources :courses do
    resources :questions, except: [:show]
    resources :steps, only: %i[create update destroy edit]
    resources :attendances
  end

  resources :achievements, only: %i[create destroy]

  resources :questions, except: [:show]

  devise_for :teachers, path: 'teachers'
  devise_for :students, path: 'students'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
