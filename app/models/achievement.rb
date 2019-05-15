# frozen_string_literal: true

# == Schema Information
#
# Table name: achievements
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint
#  step_id    :bigint
#


class Achievement < ApplicationRecord
  belongs_to :student
  belongs_to :step
end
