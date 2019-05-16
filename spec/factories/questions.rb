# frozen_string_literal: true

# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint
#  course_id  :bigint
#

FactoryBot.define do
  factory :question do
    content { Faker::Quote.yoda }
    student { FactoryBot.create(:student) }
    course { FactoryBot.create(:course) }

    trait :invalid_content do
      content { nil }
    end

    trait :invalid_student do
      student_id { nil }
    end

    trait :invalid_course do
      course_id { nil }
    end
  end
end
