# frozen_string_literal: true

class VotesController < ApplicationController
  def create
    @question = Question.find(params[:question_id])
    @vote = @question.votes.create(vote_params)
    if @vote.save
      flash[:success] = "Your vote was taken into account"
    else
      flash[:error] = "Sorry but something wrong happenned."
    end
    redirect_to course_path(@vote.question.course)
  end

  def update; end

  def destroy
    @question = Question.find(params[:question_id])
    @vote = Vote.where("student_id = ? AND question_id = ?", params[:student_id], @question.id).first
    @vote.destroy
    redirect_to course_path(@question.course)
    flash[:success] = "The vote was successfully cancelled"
  end

  private

  def vote_params
    params.require(:vote).permit(:student_id)
  end
end
