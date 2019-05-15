# frozen_string_literal: true

class Course < ApplicationRecord
  validates :title
  belongs_to :teacher
  has_many :attendances, dependent: destroy
  has_many :questions, dependent: destroy
  has_many :steps, dependent: destroy
end
