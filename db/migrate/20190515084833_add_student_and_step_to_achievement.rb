# frozen_string_literal: true

class AddStudentAndStepToAchievement < ActiveRecord::Migration[5.2]
  def change
    change_table :achievements, bulk: true do |t|
      t.belongs_to :student, index: true
      t.belongs_to :step, index: true
    end
  end
end
