class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  include ActionController::Cookies
  
  before_action :authorized_user

    def current_user
        Patient.find_by(id: session[:patient_id])
    end
    
    def authorized_user
      unless current_user
        return(render json: { error: 'Not authorized' }, status: :unauthorized)
      end
    end
    
    private
    
    def render_unprocessable_entity(invalid)
        render json: {
          errors: invalid.record.errors.full_messages,
        },
        status: :unprocessable_entity
    end
    
    def render_not_found(error)
      render json: { errors: { error.model => 'Not Found' } }, status: :not_found
    end

end
