# frozen_string_literal: true

class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name
end
