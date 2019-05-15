# frozen_string_literal: true

class CoursesController < ApplicationController
  def index
    @courses = Course.all
  end

  def show
    @course = Course.find(params[:id])
  end

  def new
    @course = Course.new
  end

  def create
    @course = Course.create(course_params)
    redirect_to home_path, success: "Course successfully created"
  end

  def update
    @course = Course.find(params[:id])
    @course.update(course_params)
    redirect_to home_path, success: "Course successfully updated"
  end

  def destroy
    @course = Course.find(params[:id])
    @course.destroy
    redirect_to home_path, success: "Course successfully deleted"
  end

  private

  def course_params
    params.require(:course).permit(:title, :content)
  end
end
