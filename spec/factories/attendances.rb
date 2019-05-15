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
    status { Faker::Boolean.boolean }
    student { Student.create(:student) }
    course { FactoryBot.create(:course) }
  end
end
