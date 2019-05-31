# frozen_string_literal: true

class StepSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  belongs_to :course, serializer: CourseSerializer
end
