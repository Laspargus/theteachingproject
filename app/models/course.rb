# frozen_string_literal: true

# == Schema Information
#
# Table name: courses
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  teacher_id  :bigint
#

class Course < ApplicationRecord
  validates :title, presence: true

  belongs_to :teacher
  has_many :attendances, dependent: :destroy
  has_many :questions, dependent: :destroy
  has_many :steps, dependent: :destroy
end
