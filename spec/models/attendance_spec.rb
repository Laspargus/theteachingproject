# frozen_string_literal: true

# == Schema Information
#
# Table name: attendances
#
#  id         :bigint           not null, primary key
#  status     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  student_id :bigint
#  course_id  :bigint
#

require 'rails_helper'

RSpec.describe Attendance, type: :model do
  describe 'Database' do
    it { is_expected.to have_db_column(:status).of_type(:boolean).with_options(default: false) }
    it { is_expected.to have_db_column(:student_id).of_type(:integer) }
    it { is_expected.to have_db_column(:course_id).of_type(:integer) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime).with_options(null: false) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime).with_options(null: false) }
  end

  describe "Associations" do
    let(:attendance) { build(:attendance) }

    it { expect(attendance).to belong_to(:student) }
    it { expect(attendance).to belong_to(:course) }
  end

  describe 'Factories' do
    context 'with valid attributes' do
      let!(:attendance) { build(:attendance) }

      it { expect(attendance.errors).to be_empty }

      # it "is valid with valid attributes" do
      #   expect(attendance).to be_valid
      # end
    end

    context 'with unvalid attributes' do
      let(:attendance_wrong_status) { build(:attendance, :invalid_status) }

      let(:attendance_wrong_student) { build(:attendance, :invalid_student) }

      let(:attendance_wrong_course) { build(:attendance, :invalid_course) }

      # it "is not valid with unvalid status" do
      #   expect(attendance_wrong_status).not_to be_valid
      # end

      # it "is not valid with unvalid student_id" do
      #   expect(attendance_wrong_student).not_to be_valid
      # end

      it "is not valid with unvalid course_id" do
        expect(attendance_wrong_course).not_to be_valid
      end
    end
  end
end
