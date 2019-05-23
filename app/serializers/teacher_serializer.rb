class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name
end
