# frozen_string_literal: true

class VotesController < ApplicationController
  before_action :set_question, only: %i[index create destroy findvote]

  def create
    @vote = @question.votes.create(student: current_student)
    puts @vote.id
    respond_to do |format|
      format.html {}
      format.json do
        render json: @vote
      end
    end
  end

  def index
    @votes = @question.votes
    respond_to do |format|
      format.html {}
      format.json do
        render json: @votes
      end
    end
  end

  def update; end

  def destroy
    @vote = Vote.find(params[:id])
    @vote.destroy
    respond_to do |format|
      format.html {}
      format.json do
        render json: @vote
      end
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:student_id)
  end

  def set_question
    @question = Question.find(params[:question_id])
  end
end
