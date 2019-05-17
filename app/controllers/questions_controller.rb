# frozen_string_literal: true

class QuestionsController < ApplicationController
  before_action :set_course, only: %i[index new create]

  def index
    @questions = Question.where(course_id: @course)
  end

  def new
    @new_question = Question.new
  end

  def create
    @new_question = @course.questions.create(question_params)
    @new_question.student_id = current_student.id
    if @new_question.save
      redirect_to course_questions_path
    else
      render 'new'
    end
  end

  def edit
    @question = Question.find(params[:id])
  end

  def update
    @question = Question.find(params[:id])
    @question.update(question_params)
    redirect_to root_path, success: "Question successfully updated"
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    redirect_to root_path, success: "Question successfully deleted"
  end

  private

  def question_params
    params.require(:question).permit(:content, :student_id, :course_id)
  end

  def set_course
    @course = Course.find(params[:course_id])
  end
end
