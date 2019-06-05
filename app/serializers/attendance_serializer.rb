# frozen_string_literal: true

class AttendanceSerializer < ActiveModel::Serializer
  attributes :id, :status

  belongs_to :student, serializer: StudentSerializer
  belongs_to :course, serializer: CourseSerializer
end
