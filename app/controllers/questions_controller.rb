# frozen_string_literal: true

class QuestionsController < ApplicationController
  def index
    @questions = Question.all
  end

  def new
    @course = Course.find(params[:course_id])
    @question = @course.questions.new
  end

  def create
    puts "$" * 50
    puts @course = Course.find(params[:course_id])
    puts @question = @course.questions.build(question_params)
    puts @question.student_id == current_student.id
    @question.save
    if @question.save
      redirect_to root_path, success: "Question successfully created"
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
    raise params.inspect
  end
end
