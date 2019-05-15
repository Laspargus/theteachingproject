# frozen_string_literal: true

class AddQuestionAndStudentToVotes < ActiveRecord::Migration[5.2]
  def change
    change_table :votes, bulk: true do |t|
      t.belongs_to :student, index: true
      t.belongs_to :question, index: true
    end
  end
end
