class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :time, :date
  has_one :patient_medication
end
