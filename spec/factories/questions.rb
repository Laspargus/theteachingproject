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
    student_id { Student.ids.sample }
    course_id { Course.ids.sample  }
  end
end