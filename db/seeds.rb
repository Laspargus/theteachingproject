# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Student.destroy_all
p "Old students destroyed"

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

Teacher.destroy_all
p "Old teachers destroyed"

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
Course.destroy_all

6.times do
  Course.create!(
    title: Faker::IndustrySegments.industry,
    description: Faker::Lorem.sentence(3),
    teacher: Teacher.all.sample
  )
end

p "Courses are now created"

60.times do
  Attendance.create!(
    status: "false",
    student: Student.all.sample,
    course: Course.all.sample,
  )
end

p "Attendances are now created"

30.times do
  Question.create!(
    content: Faker::TvShows::RuPaul.quote,
    course: Course.all.sample,
    student: Student.all.sample,
  )
end

p "Questions are now created"

90.times do
  Vote.create!(
    question: Question.all.sample,
    student: Student.all.sample
  )
end

p "Votes are now created"

40.times do
  Step.create!(
    title: Faker::IndustrySegments.sector,
    course: Course.all.sample,
    description: 'krh abzrlfablrzfhbzlerhbgflhsebrfg'
  )
end

p "Steps are now created"

90.times do
  Achievement.create!(
    step: Step.all.sample,
    student: Student.all.sample
  )
end

p "Achievements are now created"
