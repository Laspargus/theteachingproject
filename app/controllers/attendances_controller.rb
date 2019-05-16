# frozen_string_literal: true

class AttendancesController < ApplicationController
  def show; end

  def destroy; end

  def edit; end

  def update; end

  def new
    @course = Course.find(params[:course_id])
    @attendance = Attendance.new
    @invitations = Attendance.where(course: @course, status: false)
    @attendances = Attendance.where(course: @course, status: true)
  end

  def create
    @course = Course.find(params[:course_id])
    @email = params[:attendance][:email]
    @student = Student.find_by(email: @email)
    @attending = Attendance.find_by(student: @student, course: @course)
    student = @student
    email = @email

    if !@student.nil? && @attending.nil?
      @attendance = Attendance.create(course: @course, student: @student, status: false)
      flash[:notice] = "#{student.first_name} has been invited to course"
    elsif !@student.nil? && !@attending.nil?
      flash[:notice] = "#{student.first_name} has already been invited to course"
    else
      flash[:notice] = "#{email} is not a member. We invited him to join application. Please invite him to course later"
    end
    redirect_to new_course_attendance_path(@course)
  end

  def index; end

  private

  def attendance_params
    params.require(:attendance).permit(:email)
  end
end
