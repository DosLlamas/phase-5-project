class PatientMedication < ApplicationRecord
    belongs_to :patient
    belongs_to :medication

end
