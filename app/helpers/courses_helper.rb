# frozen_string_literal: true

module CoursesHelper
  def pending_invitation(course, student)
    return true if Attendance.exists?(course: course, student: student, status: false)
  end
end
