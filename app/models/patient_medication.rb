class PatientMedication < ApplicationRecord
    belongs_to :patient
    belongs_to :medication
    has_many :schedules

end
