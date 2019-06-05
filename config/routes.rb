# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  resources :courses do
    resources :questions, except: [:show] do
      member do
        get 'findvote'
      end
      resources :votes, except: %i[show edit new] do
      end
    resources :steps, only: %i[create update destroy edit index show] do
      resources :achievements, only: %i[create destroy index]
     end
  end
 

  devise_for :teachers, path: 'teachers'
  devise_for :students, path: 'students'
  resources :students, only: %i[index]
  resources :teachers, only: %i[index]
end
