# frozen_string_literal: true

# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint
#  course_id  :bigint
#

require 'rails_helper'

RSpec.describe Question, type: :model do
  describe 'Database' do
    it { is_expected.to have_db_column(:content).of_type(:text) }
    it { is_expected.to have_db_column(:student_id).of_type(:integer) }
    it { is_expected.to have_db_column(:course_id).of_type(:integer) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime).with_options(null: false) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime).with_options(null: false) }
  end

  describe "Associations" do
    let(:question) { build(:question) }

    it { expect(question).to belong_to(:student) }
    it { expect(question).to belong_to(:course) }
    it { expect(question).to have_many(:votes).dependent(:destroy) }
  end

  describe "Validations" do
    it { is_expected.to validate_presence_of(:content) }
  end

  describe 'Factories' do
    context 'with valid attributes' do
      let!(:question) { build(:question) }

      it { expect(question.errors).to be_empty }

      it "is valid with valid attributes" do
        expect(question).to be_valid
      end
    end

    context 'with unvalid attributes' do
      let(:question_invalid_content) { build(:question, :invalid_content) }

      let(:question_invalid_student) { build(:question, :invalid_student) }

      let(:question_invalid_course) { build(:question, :invalid_course) }

      it "is not valid with unvalid content" do
        expect(question_invalid_content).not_to be_valid
      end

      it "is not valid with unvalid student_id" do
        expect(question_invalid_student).not_to be_valid
      end

      it "is not valid with unvalid course" do
        expect(question_invalid_course).not_to be_valid
      end
    end
  end
end
