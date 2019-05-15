# frozen_string_literal: true

# == Schema Information
#
# Table name: steps
#
#  id          :bigint           not null, primary key
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  course_id   :bigint
#  description :text
#

class Step < ApplicationRecord
  belongs_to :course
  has_many :achievements, dependent: :destroy
end
