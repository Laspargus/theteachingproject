# frozen_string_literal: true

class QuestionsController < ApplicationController
  def index
  	@questions = Question.all
  end

  def new
  	@question = Question.new
  end

  def create
  	@question = Question.create(question_params)
  	if @question.save
  		redirect_to root_path, success: "Question successfully created"
  	else
  		render 'new'
  	end
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
end
