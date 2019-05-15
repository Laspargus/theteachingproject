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

  # describe "associations" do
  #   let(:selection) { build(:selection) }

  #   it { expect(selection).to belong_to(:cart) }
  #   it { expect(selection).to belong_to(:product) }
  # end
end
