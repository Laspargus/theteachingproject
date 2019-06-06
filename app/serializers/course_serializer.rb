# frozen_string_literal: true

class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description

  belongs_to :teacher, serializer: TeacherSerializer
  has_many :attendances, serializer: AttendanceSerializer
end
