# frozen_string_literal: true

class Vote < ApplicationRecord
  belongs_to :student
  belongs_to :question
end
