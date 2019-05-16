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

  def edit
    @course = Course.find(params[:course_id]).id
    @step = Step.find(params[:id])
  end

  def update
    @course = Course.find(params[:course_id]).id
    @step = Step.find(params[:id])
    @step.update(step_params)
    redirect_to course_path(@course), success: "Step successfully updated"
  end

  def destroy
    @course = Course.find(params[:course_id]).id
    @step = Step.find(params[:id])
    @step.destroy
    redirect_to course_path(@course), success: "Step successfully deleted"
  end

  private

  def step_params
    params.require(:step).permit(:title, :description, :course_id)
  end
end
