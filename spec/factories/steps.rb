# frozen_string_literal: true

# == Schema Information
#
# Table name: steps
#
#  id          :bigint           not null, primary key
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  course_id   :bigint
#  description :text
#

FactoryBot.define do
  factory :step do
    title { Faker::TvShows::Simpsons.character }
    description { Faker::Quotes::Shakespeare.hamlet_quote }
    course { FactoryBot.create(:course) }

    trait :invalid_title do
      title { nil }
    end

    trait :invalid_course do
      course_id { nil }
    end

    trait :invalid_descrition do
      description { nil }
    end
  end
end
