# frozen_string_literal: true

class CoursesController < ApplicationController
  before_action :set_course, only: %i[edit update show destroy]

  def index
    @courses = Course.all
  end

  def show
    @attendance = Attendance.find_by(course: @course, student: current_student)
    @steps = @course.steps
    @step = Step.new
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
end
