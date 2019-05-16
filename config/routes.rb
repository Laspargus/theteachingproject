# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  resources :courses do
    resources :steps, only: %i[create update destroy edit]
  end

  devise_for :teachers
  devise_for :students
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
