class AttendanceSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :student, serializer: StudentSerializer
  belongs_to :course, serializer: CourseSerializer
end
