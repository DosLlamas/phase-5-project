class PatientMedicationSerializer < ActiveModel::Serializer
  attributes :id, :dosing_frequency, :provider, :rx_number
end
