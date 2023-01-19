class PatientMedicationSerializer < ActiveModel::Serializer
  attributes :id, :dosing_frequency, :provider, :rx_number
  has_one :patient
  has_one :medication

end
