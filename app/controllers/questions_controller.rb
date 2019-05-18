# frozen_string_literal: true

class QuestionsController < ApplicationController
  before_action :set_course, only: %i[new create destroy]
  before_action :set_question, only: %i[authenticate_question_author edit update destroy]
  before_action :authenticate_question_author, only: %i[destroy]

  def new
    @new_question = Question.new
  end

  def create
    @new_question = @course.questions.create(question_params)
    @new_question.student_id = current_student.id
    if @new_question.save
      redirect_to course_path(@course)
    else
      render 'new'
    end
  end

  def edit; end

  def update
    @question.update(question_params)
    redirect_to course_path(@question.course)
    flash[:success] = "Question successfully deleted"
  end

  def destroy
    @question.destroy
    redirect_to course_path(@course)
    flash[:notice] = "Question successfully deleted"
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
