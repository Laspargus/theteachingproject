# frozen_string_literal: true

class Attendance < ApplicationRecord
  validates :status

  belongs_to :student
  belongs_to :course
end
