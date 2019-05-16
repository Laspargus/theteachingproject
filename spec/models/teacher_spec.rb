# frozen_string_literal: true

# == Schema Information
#
# Table name: teachers
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string           default(""), not null
#  last_name              :string           default(""), not null
#

require 'rails_helper'

RSpec.describe Teacher, type: :model do
  describe 'Database' do
    it { is_expected.to have_db_column(:id).of_type(:integer).with_options(null: false) }
    it { is_expected.to have_db_column(:email).of_type(:string).with_options(default: "", null: false) }
    it { is_expected.to have_db_column(:encrypted_password).of_type(:string).with_options(default: "", null: false) }
    it { is_expected.to have_db_column(:remember_created_at).of_type(:datetime) }
    it { is_expected.to have_db_column(:reset_password_sent_at).of_type(:datetime) }
    it { is_expected.to have_db_column(:reset_password_token).of_type(:string) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime).with_options(null: false) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime).with_options(null: false) }
    it { is_expected.to have_db_column(:first_name).of_type(:string).with_options(default: "", null: false) }
    it { is_expected.to have_db_column(:last_name).of_type(:string).with_options(default: "", null: false) }
  end

  describe "Associations" do
    let(:teacher) { build(:teacher) }

    it { expect(teacher).to have_many(:courses).dependent(:destroy) }
  end

  describe "Validations" do
    it { is_expected.to validate_uniqueness_of(:email).ignoring_case_sensitivity }
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_presence_of(:last_name) }
  end

  describe 'Factories' do
    context 'with valid attributes' do
      let!(:teacher) { build(:teacher) }

      it { expect(teacher.errors).to be_empty }

      it "is valid with valid attributes" do
        expect(teacher).to be_valid
      end
    end

    context 'with unvalid email' do
      let(:teacher) { build(:teacher, email: nil) }

      it "is not valid without title" do
        expect(teacher).not_to be_valid
      end
    end

    context 'with unvalid first_name' do
      let(:teacher) { build(:teacher, first_name: nil) }

      it "is not valid without title" do
        expect(teacher).not_to be_valid
      end
    end

    context 'with unvalid last_name' do
      let(:teacher) { build(:teacher, last_name: nil) }

      it "is not valid without title" do
        expect(teacher).not_to be_valid
      end
    end
  end
end
