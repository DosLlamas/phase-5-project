class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    include ActionController::Cookies
    def create
        patient = Patient.find_by(email: params[:email])
    
        if patient&.authenticate(params[:password])
          session[:patient_id] = patient.id
    
          render json: patient, status: :ok
        else
          render json: {
                   errors: 'Invalid Email or Password',
                 },
                 status: :unauthorized
        end
      end
      def show
        patient = Patient.find_by(id: session[:patient_id])
        render json: patient
      end
    
      def delete
        session.delete :patient_id
        head :no_content
      end
end
