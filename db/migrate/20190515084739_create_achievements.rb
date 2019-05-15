# frozen_string_literal: true

class CreateAchievements < ActiveRecord::Migration[5.2]
  def change
    create_table :achievements, &:timestamps
  end
end
