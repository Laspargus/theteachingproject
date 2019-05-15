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
    @course = current_teacher.courses.build(course_params)
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
=begin
    ArgumentError in CoursesController#destroy
    wrong number of arguments (given 0, expected 1)
    Extracted source (around line #5):
    class Step < ApplicationRecord
      belongs_to :course
      has_many :achievements, dependent: destroy <=======================================================
    end
=end
  end

  private

  def course_params
    params.require(:course).permit(:title, :description)
  end
end
