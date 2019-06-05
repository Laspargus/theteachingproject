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
    end
    resources :steps, only: %i[create update destroy edit index]
    resources :attendances
  end

  resources :achievements, only: %i[create destroy index]

  resources :questions, except: [:show]

  devise_for :teachers, path: 'teachers'
  devise_for :students, path: 'students'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
