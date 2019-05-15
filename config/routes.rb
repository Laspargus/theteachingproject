# frozen_string_literal: true

Rails.application.routes.draw do

  root 'home#index'

  resources :courses

  devise_for :teachers
  devise_for :students
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
