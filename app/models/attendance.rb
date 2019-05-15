# frozen_string_literal: true

class Attendance < ApplicationRecord
  validates :status, presence: true

  belongs_to :student
  belongs_to :course
end
