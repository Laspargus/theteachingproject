# frozen_string_literal: true

class CoursesController < ApplicationController
  before_action :set_course, only: %i[edit update show destroy]
  before_action :match_teacher, only: %i[edit update destroy]
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
    respond_to do |format|
      format.html {}
      format.json do
        render json: @courses, serializer: CourseSerializer
      end
    end
  end

  def show
    respond_to do |format|
      format.html do
        render :index
      end
      format.json do
        render json: @course
      end
    end
  end

  def new
    @course = Course.new
  end

  def create
    course = Course.create(course_params.merge(teacher_id: current_teacher.id))
    respond_to do |format|
      format.html do
        redirect_to root_path, success: "Course successfully created"
      end
      format.json do
        render json: course
      end
    end
  end

  def edit; end

  def update
    @course.update(course_params)
    render json: @course
  end

  def destroy
    @course.destroy
    render json: @course
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
