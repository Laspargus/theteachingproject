# frozen_string_literal: true

class StepsController < ApplicationController
  def create
    @course = Course.find(params[:course_id]).id
    @step = Step.create(step_params)
    @step.title = params[:step][:title]
    @step.description = params[:step][:description]
    @step.course_id = @course
    redirect_to course_path(@course), success: "Step successfully created" if @step.save
  end

  private

  def step_params
    params.require(:step).permit(:title, :description, :course_id)
  end
end
