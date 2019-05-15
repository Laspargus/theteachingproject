# frozen_string_literal: true

class AddStudentAndClassRelationToAttedendance < ActiveRecord::Migration[5.2]
  def change
    change_table :attendances, bulk: true do |t|
      t.belongs_to :student, index: true
      t.belongs_to :course, index: true
    end
  end
end
