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


class Question < ApplicationRecord
  belongs_to :student
  belongs_to :course
  has_many :votes, dependent: :destroy
end
