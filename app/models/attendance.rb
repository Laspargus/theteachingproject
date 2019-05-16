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
  after_create :invitation_to_course

  belongs_to :student
  belongs_to :course

  # validates :status, presence: { message: "Status must be true or false" }

  def invitation_to_course
    UserMailer.invitation_course_mail(self).deliver_later
  end
end
