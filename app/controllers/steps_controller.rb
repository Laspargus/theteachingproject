# frozen_string_literal: true

class StepsController < ApplicationController
  before_action :set_step, only: %i[edit update destroy]
  before_action :set_course, only: %i[create edit]
  before_action :authenticate_teacher!, only: %i[create edit update destroy]

  def index
    @steps = Step.all
    respond_to do |format|
      format.html {}
      format.json do
        render json: @steps
      end
    end
  end

  # def create
  #   @step = @course.steps.build(step_params)
  #   @step.title = params[:step][:title]
  #   @step.description = params[:step][:description]
  #   redirect_to course_path(@course)
  #   flash[:alert] = if @step.save
  #                     "Step created"
  #                   else
  #                     "Step created failed"
  #                   end
  # end

  def create
    @step = Step.create(course_id: params[:step][:id], title: params[:step][:title], description: params[:step][:description] )
    puts @step.errors.messages
    respond_to do |format|
      format.html do
        redirect_to root_path, success: "Course successfully created"
      end
      format.json do
        render json: @step
      end
    end
  end

  def edit; end

  def update
    @step.update(course_id: params[:step][:id], title: params[:step][:title], description: params[:step][:description])
    render json: @step
  end

  def destroy
    @step.destroy
    render json: @step
  end

  private

  def set_course
    @course = Course.find(params[:course_id])
  end

  def set_step
    @step = Step.find(params[:id])
  end

  def step_params
    params.require(:step).permit(:id, :title, :description)
  end
end
