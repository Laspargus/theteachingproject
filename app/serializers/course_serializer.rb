# frozen_string_literal: true

class CourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :description

  belongs_to :teacher, serializer: TeacherSerializer
end
