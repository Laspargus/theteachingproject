# frozen_string_literal: true

class StudentsController < ApplicationController
  before_action :authenticate_student!

  def index
    render json: current_student.to_json
  end
end
