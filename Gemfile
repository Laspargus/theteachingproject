# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

File.read('./.ruby-version')

gem 'active_model_serializers', '~> 0.10.9'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'coffee-rails', '~> 4.2'
gem 'devise', '~> 4.2'
gem 'faker', '~> 1.9', '>= 1.9.3'
gem 'jbuilder', '~> 2.5'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.11'
gem 'rails', '~> 5.2.3'
gem 'rails_db', '~> 1.6'
gem 'sass-rails', '~> 5.0'
gem 'sidekiq', '~> 5.2', '>= 5.2.7'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 4.0', '>= 4.0.2'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails', '~> 2.7', '>= 2.7.2'
  gem 'factory_bot_rails', '~> 5.0', '>= 5.0.2'
  gem 'rspec-rails', '~> 3.8', '>= 3.8.2'
end

group :development do
  gem 'annotate', '~> 2.7', '>= 2.7.5'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'rubocop', '~> 0.69.0', require: false
  gem 'rubocop-rspec', '~> 1.33', require: false
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'shoulda-matchers', '~> 4.0', '>= 4.0.1'
  gem 'simplecov', '~> 0.16.1', require: false
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
