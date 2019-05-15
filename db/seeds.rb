# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

20.times do
  Student.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "123456",
    password_confirmation: "123456"
  )
end

p "Students are now created"

5.times do
  Teacher.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "azerty",
    password_confirmation: "azerty"
  )
end

p "Teachers are now created"

6.times do
  Course.create!(
    title: Faker::IndustrySegments.industry,
    description: Faker::Lorem.sentence(3),
    teacher_id: rand(1..5)
  )
end

p "Courses are now created"

60.times do
  Attendance.create!(
    status: Faker::Boolean.boolean(0.2),
    student_id: rand(1..10),
    course_id: rand(1..5)
  )
end

p "Attendances are now created"

30.times do
  Question.create!(
    content: Faker::TvShows::RuPaul.quote,
    course_id: rand(1..10),
    student_id: rand(1..10)
  )
end

p "Questions are now created"

90.times do
  Vote.create!(
    question_id: rand(1..10),
    student_id: rand(1..10)
  )
end

p "Votes are now created"

40.times do
  Step.create!(
    title: Faker::IndustrySegments.sector,
    student_id: rand(1..10)
  )
end

p "Steps are now created"

90.times do
  Achievement.create!(
    step_id: rand(1..10),
    student_id: rand(1..10)
  )
end

p "Achievements are now created"
