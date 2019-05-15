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


class Attendance < ApplicationRecord
  validates :status, presence: true

  belongs_to :student
  belongs_to :course
end
