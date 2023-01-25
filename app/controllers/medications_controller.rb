class MedicationsController < ApplicationController

    def index
        @medications = Medication.alphabetize
        render json: @medications
    end
    def create
        medication_new = Medication.new(new_medication_params)
        medication_new.patient = current_user
        if medication_new.save
            render json: medication_new
        else
            # render json: {"errors": medication_new.errors.full_messages}, status: 422
            render json: {"errors": "error"}, status: 422
        end
    end

    private
    def new_medication_params
        params.permit(:name, :strength)
    end
end
