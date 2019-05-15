# frozen_string_literal: true

class AddStudentAndClassToQuestion < ActiveRecord::Migration[5.2]
  def change
    change_table :questions, bulk: true do |t|
      t.belongs_to :student, index: true
      t.belongs_to :course, index: true
    end
  end
end
