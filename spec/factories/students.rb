# frozen_string_literal: true

# == Schema Information
#
# Table name: students
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string           default(""), not null
#  last_name              :string           default(""), not null
#

FactoryBot.define do
  factory :student do
    email { Faker::Internet.unique.email }
    password { "password" }
    password_confirmation { "password" }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
  end
end
