# frozen_string_literal: true

module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_student

    def connect
      self.current_student = find_verified_student
    end

    private

    def find_verified_student
      session_key = cookies.encrypted[Rails.application.config.session_options[:key]]
      verified_id = session_key['warden.user.user.key'][0][0]
      verified_student = Student.find_by(id: verified_id)
      return reject_unauthorized_connection unless verified_student

      verified_student
    end
  end
end
