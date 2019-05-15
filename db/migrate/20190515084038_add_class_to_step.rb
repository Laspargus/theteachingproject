# frozen_string_literal: true

class AddClassToStep < ActiveRecord::Migration[5.2]
  def change
    change_table :steps, bulk: true do |t|
      t.belongs_to :course, index: true
    end
  end
end
