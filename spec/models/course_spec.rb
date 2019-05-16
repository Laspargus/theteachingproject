# frozen_string_literal: true

# == Schema Information
#
# Table name: courses
#
#  id          :bigint           not null, primary key
#  title       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  teacher_id  :bigint
#

require 'rails_helper'

RSpec.describe Course, type: :model do
  describe 'Database' do
    it { is_expected.to have_db_column(:title).of_type(:string) }
    it { is_expected.to have_db_column(:description).of_type(:text) }
    it { is_expected.to have_db_column(:teacher_id).of_type(:integer) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime).with_options(null: false) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime).with_options(null: false) }
  end

  describe "Associations" do
    let(:course) { build(:course) }

    it { expect(course).to belong_to(:teacher) }
    it { expect(course).to have_many(:attendances).dependent(:destroy) }
    it { expect(course).to have_many(:questions).dependent(:destroy) }
    it { expect(course).to have_many(:steps).dependent(:destroy) }
  end

  describe "Validations" do
    it { is_expected.to validate_presence_of(:title) }
  end

  describe 'Factories' do
    context 'with valid attributes' do
      let!(:course) { build(:course) }

      it { expect(course.errors).to be_empty }

      it "is valid with valid attributes" do
        expect(course).to be_valid
      end
    end

    context 'with unvalid attributes' do
      let(:course_wrong_title) { build(:course, :invalid_title) }

      let(:course_wrong_teacher) { build(:course, :invalid_teacher) }

      it "is not valid with unvalid status" do
        expect(course_wrong_title).not_to be_valid
      end

      it "is not valid with unvalid student_id" do
        expect(course_wrong_teacher).not_to be_valid
      end
    end
  end
end
