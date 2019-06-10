# frozen_string_literal: true

module HomeHelper

    def resource_name
    :teacher
  end

  def resource
    @resource ||= Teacher.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:teacher]
  end
end
