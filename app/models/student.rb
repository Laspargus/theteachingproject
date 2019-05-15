# frozen_string_literal: true

class Student < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :email, uniqueness: true

  has_many :questions, dependent: :destroy
  has_many :achievements, dependent: :destroy
  has_many :votes, dependent: :destroy
  has_many :attendances, dependent: :destroy
  has_many :courses, through: :attendances, dependent: :destroy
end
