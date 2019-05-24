# frozen_string_literal: true

class CoursesController < ApplicationController
  before_action :set_course, only: %i[edit update show destroy]
  before_action :match_teacher, only: %i[new create edit update destroy]
  before_action :match_student_teacher, only: %i[show]

  def index
    if current_teacher
      @courses = Course.all.where(teacher: current_teacher)
    else
      @courses = []
      current_student.attendances.each do |attendance|
        @courses << attendance.course
      end
    end
  end

  def show
    @attendance = Attendance.find_by(course: @course, student: current_student)
    @steps = @course.steps
    @step = Step.new
    @questions = @course.questions.sort_by(&:num_votes).reverse
    @achievement = Achievement.new

    # for attendances
    @invitations = Attendance.where(course: @course, status: false)
    @attendances = Attendance.where(course: @course, status: true)
  end

  def new
    @course = Course.new
  end

  def create
    @course = Course.create(course_params)
    @course.teacher_id = current_teacher.id
    if @course.save
      redirect_to root_path, success: "Course successfully created"
    else
      render 'new'
    end
  end

  def edit; end

  def update
    @course.update(course_params)
    redirect_to root_path, success: "Course successfully updated"
  end

  def destroy
    @course.destroy
    redirect_to root_path, success: "Course successfully deleted"
  end

  private

  def set_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:title, :description, :teacher_id)
  end

  def match_teacher
    redirect_to courses_path unless @course.teacher == current_teacher
  end

  def match_student_teacher
    @students_id = []
    @course.attendances.each do |attendance|
      @students_id << attendance.student_id
    end
    if current_student
      redirect_to courses_path unless @students_id.include?(current_student.id)
    else
      redirect_to courses_path unless @course.teacher == current_teacher
    end
  end
end
