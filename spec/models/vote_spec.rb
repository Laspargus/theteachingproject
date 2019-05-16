# frozen_string_literal: true

# == Schema Information
#
# Table name: votes
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  student_id  :bigint
#  question_id :bigint
#

require 'rails_helper'

RSpec.describe Vote, type: :model do
  describe 'Database' do
    it { is_expected.to have_db_column(:created_at).of_type(:datetime).with_options(null: false) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime).with_options(null: false) }
    it { is_expected.to have_db_column(:student_id).of_type(:integer) }
    it { is_expected.to have_db_column(:question_id).of_type(:integer) }
  end

  describe "Associations" do
    let(:vote) { build(:vote) }

    it { expect(vote).to belong_to(:student) }
    it { expect(vote).to belong_to(:question) }
  end

  describe 'Factories' do
    context 'with valid attributes' do
      let!(:vote) { build(:vote) }

      it { expect(vote.errors).to be_empty }

      it "is valid with valid attributes" do
        expect(vote).to be_valid
      end
    end

    context 'with unvalid student_id' do
      let(:vote) { build(:vote, student_id: nil) }

      it "is not valid without student_id" do
        expect(vote).not_to be_valid
      end
    end

    context 'with unvalid question' do
      let(:vote) { build(:vote, question_id: nil) }

      it "is not valid without question" do
        expect(vote).not_to be_valid
      end
    end
  end
end
