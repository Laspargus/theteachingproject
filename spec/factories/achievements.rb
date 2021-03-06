# frozen_string_literal: true

# == Schema Information
#
# Table name: achievements
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint
#  step_id    :bigint
#

FactoryBot.define do
  factory :achievement do
    student { FactoryBot.create(:student) }
    step { FactoryBot.create(:step) }

    trait :invalid_step do
      step_id { nil }
    end

    trait :invalid_student do
      student_id { nil }
    end
  end
end
