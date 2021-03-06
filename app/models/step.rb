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
  validates :title, :description, presence: true

  belongs_to :course
  has_many :achievements, dependent: :destroy
  has_many :achievers, through: :achievements, source: :student
end
