# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'no-reply@theteachingproject.com'
  layout 'mailer'
end
