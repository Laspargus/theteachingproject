# frozen_string_literal: true

class StepsController < ApplicationController
  def create
    @course = Course.find(params[:course_id])
    @step = @course.steps.build(step_params)
    @step.title = params[:step][:title]
    @step.description = params[:step][:description]
    if @step.save
      redirect_to course_path(@course), success: "Step successfully created"
    else
      redirect_to course_path(@course)
    end
  end

  def edit
    @course = Course.find(params[:course_id]).id
    @step = Step.find(params[:id])
  end

  def update
    @step = Step.find(params[:id])
    @step.update(step_params)
    redirect_to course_path(@step.course), success: "Step successfully updated"
  end

  def destroy
    @step = Step.find(params[:id])
    @course = @step.course
    @step.destroy
    redirect_to course_path(@course), success: "Step successfully deleted"
  end

  private

  def step_params
    params.require(:step).permit(:title, :description)
  end
end
