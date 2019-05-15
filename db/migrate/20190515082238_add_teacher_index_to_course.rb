# frozen_string_literal: true

class AddTeacherIndexToCourse < ActiveRecord::Migration[5.2]
  def change
    change_table :courses, bulk: true do |t|
      t.belongs_to :teacher, index: true
    end
  end
end
