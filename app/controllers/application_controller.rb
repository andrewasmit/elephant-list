class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    private 

    def render_unprocessable_entity_response e
        render json:  { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

end
