# frozen_string_literal: true

class AddStudentAndStepToAchievment < ActiveRecord::Migration[5.2]
  def change
    change_table :achievments, bulk: true do |t|
      t.belongs_to :student, index: true
      t.belongs_to :step, index: true
    end
  end
end
