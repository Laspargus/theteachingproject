# frozen_string_literal: true

class AttendancesController < ApplicationController
  before_action :set_course, only: %i[index new create update destroy]

  def index
    @attendances = @course.attendances
    respond_to do |format|
      format.html {}
      format.json do
        render json: @attendances.to_json
      end
    end
  end

  def new
    @attendance = Attendance.new
    @invitations = Attendance.where(course: @course, status: false)
    @attendances = Attendance.where(course: @course, status: true)
  end

  def create
    @email = params[:attendance][:email]
    @student = Student.find_by(email: @email)
    @attending = Attendance.find_by(student: @student, course: @course)
    student = @student
    email = @email

    if !@student.nil? && @attending.nil?
      @attendance = Attendance.create(course: @course, student: @student, status: false)
      @attendance.save
      respond_to do |format|
        format.html do
          flash[:notice] = "#{student.first_name} has been invited to course"
        end
        format.json do
          render json: @attendance
        end
      end
    elsif !@student.nil? && !@attending.nil?
      flash[:notice] = "#{student.first_name} has already been invited to course"
    else
      invitation_to_application(@email, @course.teacher)
      flash[:notice] = "#{email} is not a member. We invited him to join application. Please invite him to course later"
    end
    # redirect_to course_path(@course)
  end

  def update
    @attendance = Attendance.find_by(course: @course, student: current_student)
    @attendance.update(status: true)

    flash[:notice] = "Invitation accepted"
    redirect_to course_path(@course)
  end

  def destroy
    @attendance = Attendance.find(params[:id])
    @attendance.delete
    respond_to do |format|
      format.html do
        flash[:notice] = "#{student.first_name} has been invited to course"
      end
      format.json do
        render json: @attendance
      end
    end
    # flash[:notice] = "Attendance deleted"
    # redirect_to course_path(@course)
  end

  private

  def set_course
    @course = Course.find(params[:course_id])
  end

  def attendance_params
    params.require(:attendance).permit(:email)
  end

  def invitation_to_application(email, teacher)
    UserMailer.invitation_application_mail(email, teacher).deliver_later
  end
end
