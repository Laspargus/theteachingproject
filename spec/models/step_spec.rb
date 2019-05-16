# frozen_string_literal: true

# == Schema Information
#
# Table name: steps
#
#  id          :bigint           not null, primary key
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  course_id   :bigint
#  description :text
#

require 'rails_helper'

RSpec.describe Step, type: :model do
  describe 'Database' do
    it { is_expected.to have_db_column(:title).of_type(:string) }
    it { is_expected.to have_db_column(:description).of_type(:text) }
    it { is_expected.to have_db_column(:course_id).of_type(:integer) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime).with_options(null: false) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime).with_options(null: false) }
  end

  describe "Associations" do
    let(:step) { build(:step) }

    it { expect(step).to belong_to(:course) }
    it { expect(step).to have_many(:achievements).dependent(:destroy) }
  end

  describe "Validations" do
    it { is_expected.to validate_presence_of(:title) }
    it { is_expected.to validate_presence_of(:description) }
  end

  describe 'Factories' do
    context 'with valid attributes' do
      let!(:step) { build(:step) }

      it { expect(step.errors).to be_empty }

      it "is valid with valid attributes" do
        expect(step).to be_valid
      end
    end

    context 'with unvalid attributes' do
      let(:step_invalid_title) { build(:step, :invalid_title) }

      let(:step_invalid_course) { build(:step, :invalid_course) }

      let(:step_invalid_descrition) { build(:step, :invalid_descrition) }

      it "is not valid without title" do
        expect(step_invalid_title).not_to be_valid
      end

      it "is not valid with unvalid course" do
        expect(step_invalid_course).not_to be_valid
      end

      it "is not valid without description" do
        expect(step_invalid_descrition).not_to be_valid
      end
    end
  end
end
