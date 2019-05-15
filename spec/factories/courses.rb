# frozen_string_literal: true

# == Schema Information
#
# Table name: courses
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  teacher_id  :bigint
#

FactoryBot.define do
  factory :course do
    title { Faker::Book.title }
    description { Faker::TvShows::VentureBros.quote }
    teacher_id { Teacher.ids.sample }
  end
end
