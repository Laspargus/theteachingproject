# frozen_string_literal: true

class Question < ApplicationRecord
  belongs_to :student
  belongs_to :course
  has_many :votes, dependent: :destroy
end
