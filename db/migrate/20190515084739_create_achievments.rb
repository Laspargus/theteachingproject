# frozen_string_literal: true

class CreateAchievments < ActiveRecord::Migration[5.2]
  def change
    create_table :achievments, &:timestamps
  end
end
