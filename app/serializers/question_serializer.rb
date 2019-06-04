# frozen_string_literal: true

class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :course, serializer: CourseSerializer
  belongs_to :student, serializer: StudentSerializer
end
