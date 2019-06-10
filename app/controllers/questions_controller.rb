# frozen_string_literal: true

class QuestionsController < ApplicationController
  before_action :set_course, only: %i[new create destroy index]
  before_action :set_question, only: %i[authenticate_question_author edit update destroy findvote]
  before_action :authenticate_question_author, only: %i[edit destroy]

  def findvote
    # if Vote.exists?("student_id = ? AND question_id = ?", current_student,@question.id )
    @vote = Vote.find_by("student_id = ? AND question_id = ?", current_student, @question.id )
    puts @vote

    respond_to do |format|
      format.html {}
      format.json do
        render json: @vote
      end
    end
  end

  def index
    @questions = @course.questions.sort_by(&:num_votes).reverse
    respond_to do |format|
      format.html {}
      format.json do
        render json: @questions
      end
    end
  end

  def new
    @new_question = Question.new
  end

  def create
    @student  = Student.last
    @question = @course.questions.create(question_params.merge(student: current_student))
    respond_to do |format|
      format.html do
        redirect_to root_path, success: "Course successfully created"
      end
      format.json do
        render json: @question
      end
    end
  end

  def edit; end

  def update
    @student = Student.last
    @question.update(question_params.merge(student: current_student))
    render json: @question
  end

  def destroy
    @question.destroy
    render json: @question
  end

  private

  def question_params
    params.require(:question).permit(:content, :student_id, :course_id)
  end

  def set_course
    @course = Course.find(params[:course_id])
  end

  def set_question
    @question = Question.find(params[:id])
  end

  def authenticate_question_author
    if @question.student == current_student || teacher_signed_in?
    else
      redirect_to course_path(@question.course); flash[:alert] = "You're not allowed to do that bro ..."
    end
  end
end
