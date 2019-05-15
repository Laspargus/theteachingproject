# frozen_string_literal: true

class Course < ApplicationRecord
  validates :title, presence: true
  belongs_to :teacher
  has_many :attendances, dependent: :destroy
  has_many :questions, dependent: :destroy
  has_many :steps, dependent: :destroy
end
