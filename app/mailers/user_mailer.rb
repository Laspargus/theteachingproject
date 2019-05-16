# frozen_string_literal: true

class UserMailer < ApplicationMailer
  default from: 'no-reply@theteachingproject.com'

  def invitation_course_mail(attendance)
    @attendance = attendance
    @course = @attendance.course
    @title = @attendance.course.title
    mail(to: @attendance.student.email, subject: "Invitation to a new course")
  end
end
