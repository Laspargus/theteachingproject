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
    teacher { FactoryBot.create(:teacher) }

    trait :invalid_title do
      title { nil }
    end

    trait :invalid_teacher do
      teacher_id { nil }
    end
  end
end
