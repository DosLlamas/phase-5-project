class Medication < ApplicationRecord
    has_many :patient_medications
    has_many :patients, through: :patient_medications

    def self.alphabetize
        reorder(:name)
    end
end
