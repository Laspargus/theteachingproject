# frozen_string_literal: true

class Step < ApplicationRecord
  belongs_to :course
  has_many :achievements, dependent: destroy
end
