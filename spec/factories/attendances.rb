# frozen_string_literal: true

# == Schema Information
#
# Table name: attendances
#
#  id         :bigint           not null, primary key
#  status     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint
#  course_id  :bigint
#

FactoryBot.define do
  factory :attendance do
    status { [true, false].sample }
    student { FactoryBot.create(:student) }
    course { FactoryBot.create(:course) }

    trait :invalid_status do
      status { "true" }
    end

    trait :invalid_student do
      status { nil }
    end

    trait :invalid_course do
      course { nil }
    end
  end
end
