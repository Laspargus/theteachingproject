# frozen_string_literal: true

class CoursesController < ApplicationController
  before_action :set_course, only: %i[edit update show destroy]
  before_action :authenticate_teacher!, only: %i[new create edit update destroy]

  def index
    @courses = Course.all
     respond_to do |format|
        format.html {}  
        format.json do
         # render json: @courses
          render json: @courses
        end
      end
  end



  def show
    @attendance = Attendance.find_by(course: @course, student: current_student)
    @steps = @course.steps
    @step = Step.new
    @questions = @course.questions.sort_by(&:num_votes).reverse
    @achievement = Achievement.new
  end

  def new
    @course = Course.new
  end

  # def create
  #   course = Course.create(course_params)
  #   course.teacher_id = current_teacher.id
  #   # if @course.save
  #   #   redirect_to root_path, success: "Course successfully created"
  #   # else
  #   #   render 'new'
  #   # end

  #   respond_to do |format|
  #       format.html do
  #         redirect_to root_path, success: "Course successfully created"
  #       end
  #       format.json do
  #        # render json: @courses
  #         render json: course
  #       end
  #   end

  # end

  def create
    course = Course.create!(create_params.merge(teacher: current_teacher))
    puts '$'*100
    puts course
    render json: course
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

   private

  def create_params
    @create_params ||= params.require(:course).permit(:description, :title)
  end
end
