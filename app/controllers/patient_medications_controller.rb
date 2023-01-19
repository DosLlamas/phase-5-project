class PatientMedicationsController < ApplicationController

    def user_index
        render json: PatientMedication.where(patient_id: session[:patient_id])
    end

    def sort_by_meds
        render json: PatientMedication.all.sort_by {|m| m.medication.name.downcase}
    end

    def sort_by_provider
        render json: PatientMedication.all.sort_by {|m| m.provider.downcase}
    end
end
