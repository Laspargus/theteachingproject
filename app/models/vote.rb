# frozen_string_literal: true

# == Schema Information
#
# Table name: votes
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  student_id  :bigint
#  question_id :bigint
#

class Vote < ApplicationRecord
  belongs_to :student
  belongs_to :question
end
