# frozen_string_literal: true

# == Schema Information
#
# Table name: achievements
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint
#  step_id    :bigint
#

require 'rails_helper'

RSpec.describe Achievement, type: :model do
  describe 'Database' do
    it { is_expected.to have_db_column(:student_id).of_type(:integer) }
    it { is_expected.to have_db_column(:step_id).of_type(:integer) }
  end

  describe "Associations" do
    let(:achievement) { build(:achievement) }

    it { expect(achievement).to belong_to(:student) }
    it { expect(achievement).to belong_to(:step) }
  end

  describe 'Factories' do
    context 'with valid attributes' do
      let!(:achievement) { build(:achievement) }

      it { expect(achievement.errors).to be_empty }

      it "is valid with valid attributes" do
        expect(achievement).to be_valid
      end
    end

    context 'with unvalid attributes' do
      let(:achievement_wrong_step) { build(:achievement, :invalid_step) }

      let(:achievement_wrong_student) { build(:achievement, :invalid_student) }

      it "is not valid with unvalid user_id" do
        expect(achievement_wrong_step).not_to be_valid
      end

      it "is not valid with unvalid student_id" do
        expect(achievement_wrong_student).not_to be_valid
      end
    end
  end
end
