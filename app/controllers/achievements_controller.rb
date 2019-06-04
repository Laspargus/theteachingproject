# frozen_string_literal: true

class AchievementsController < ApplicationController
  def create
    @achievement = Achievement.create(step_id: params[:step_id], student_id: params[:student_id])
    redirect_to course_path(@achievement.step.course)
    flash[:alert] = if @achievement.save
                      "achievement created"
                    else
                      "achievement creation failed"
                    end
  end

  def destroy
    @achievement = Achievement.find(params[:id])
    @achievement.destroy
    redirect_to course_path(@achievement.step.course)
    flash[:alert] = "achievement deleted"
  end

  def index
    @step = Step.find(params[:step_id])
    @achievements = @step.achievements
    puts achievements
    respond_to do |format|
      format.html {}
      format.json do
        render json: @steps
      end
    end
  end
end
