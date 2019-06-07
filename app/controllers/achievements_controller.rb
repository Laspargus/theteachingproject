# frozen_string_literal: true

class AchievementsController < ApplicationController
  def create
    @achievement = Achievement.create(step_id: params[:step_id], student_id: params[:student_id])
    respond_to do |format|
      format.html do
        redirect_to course_path(@achievement.step.course)
        flash[:alert] = if @achievement.save
                          "achievement created"
                        else
                          "achievement creation failed"
                        end
      end
      format.json do
        render json: @achievement
      end
    end
  end

  def destroy
    @achievement = Achievement.find(params[:id])
    @achievement.destroy
    render json: @achievement
  end

  def index
    @step = Step.find(params[:step_id])
    @achievements = @step.achievements
    respond_to do |format|
      format.html {}
      format.json do
        render json: @achievements
      end
    end
  end

  def show
    @achievement = Achievement.find(params[:id])
    respond_to do |format|
      format.json do
        render json: @achievement
      end
    end
  end
end
