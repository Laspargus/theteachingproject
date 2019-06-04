# frozen_string_literal: true

class CoursesController < ApplicationController
  before_action :set_course, only: %i[edit update show destroy]
  before_action :authenticate_teacher!, only: %i[new create edit update destroy]

  def index
    @courses = Course.all
    respond_to do |format|
      format.html
      format.json do
        render json: @courses
      end
    end
  end

  def show
    respond_to do |format|
      format.html do
        @attendance = Attendance.find_by(course: @course, student: current_student)
        @steps = @course.steps
        @step = Step.new
        @questions = @course.questions.sort_by(&:num_votes).reverse
        @achievement = Achievement.new

        # for attendances
        @invitations = Attendance.where(course: @course, status: false)
        @attendances = Attendance.where(course: @course, status: true)
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
    @course = Course.create(course_params.merge(teacher_id: current_teacher.id))
    respond_to do |format|
      format.html do
        if @course.save
          redirect_to root_path, success: "Course successfully created"
        else
          render 'new'
        end
      end
      format.json do
        render json: @course
      end
    end
    # if @course.save
    #   redirect_to root_path, success: "Course successfully created"
    # else
    #   render 'new'
    # end
  end

  def edit; end

  def update
    @course.update(course_params)
    render json: @course
    #redirect_to root_path, success: "Course successfully updated"
  end

  def destroy
    @course.destroy
    render json: @course
    #redirect_to root_path, success: "Course successfully deleted"
  end

  private

  def set_course
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:title, :description, :teacher_id)
  end
end
