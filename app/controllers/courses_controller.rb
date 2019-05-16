# frozen_string_literal: true

class CoursesController < ApplicationController
  def index
    @courses = current_teacher.courses
  end

  def show
    @course = Course.find(params[:id])
    @step = Step.new
    @steps = @course.steps
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

  def edit
    @course = Course.find(params[:id])
  end

  def update
    @course = Course.find(params[:id])
    @course.update(course_params)
    redirect_to root_path, success: "Course successfully updated"
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy
    redirect_to root_path, success: "Course successfully deleted"
  end

  private

  def course_params
    params.require(:course).permit(:title, :description, :teacher_id)
  end
end
