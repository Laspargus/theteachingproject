# frozen_string_literal: true

class StepsController < ApplicationController
  def create
    @course = Course.find(params[:course_id])
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

  def edit
    @course = Course.find(params[:course_id]).id
    @step = Step.find(params[:id])
  end

  def update
    @step = Step.find(params[:id])
    @step.update(step_params)
    redirect_to course_path(@step.course)
    flash[:alert] = "Step successfully updated"
  end

  def destroy
    @step = Step.find(params[:id])
    @course = @step.course
    @step.destroy
    redirect_to course_path(@course)
    flash[:alert] = "Step successfully deleted"
  end

  private

  def step_params
    params.require(:step).permit(:title, :description)
  end
end
