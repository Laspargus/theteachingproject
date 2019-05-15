# frozen_string_literal: true

class Achievement < ApplicationRecord
  belongs_to :student
  belongs_to :step
end
