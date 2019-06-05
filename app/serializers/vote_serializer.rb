# frozen_string_literal: true

class VoteSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :question, serializer: QuestionSerializer
  belongs_to :student, serializer: StudentSerializer
end
