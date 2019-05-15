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
    title { "MyString" }
  end
end
