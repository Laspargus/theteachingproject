# frozen_string_literal: true

class StepsController < ApplicationController
  before_action :set_step, only: %i[edit update destroy]
  before_action :set_course, only: %i[create edit]

  def create
    @step = @course.steps.build(step_params)
    @step.title = params[:step][:title]
    @step.description = params[:step][:description]
    redirect_to course_path(@course)
    flash[:alert] = if @step.save
                      "Step created"
                    else
                      "Step created failed"
                    end
  end

  def edit; end

  def update
    @step.update(step_params)
    redirect_to course_path(@step.course)
    flash[:alert] = "Step successfully updated"
  end

  def destroy
    @course = @step.course
    @step.destroy
    redirect_to course_path(@course)
    flash[:alert] = "Step successfully deleted"
  end

  private

  def set_course
    @course = Course.find(params[:course_id])
  end

  def set_step
    @step = Step.find(params[:id])
  end

  def step_params
    params.require(:step).permit(:title, :description)
  end
end
