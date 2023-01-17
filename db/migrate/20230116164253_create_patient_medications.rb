class CreatePatientMedications < ActiveRecord::Migration[6.1]
  def change
    create_table :patient_medications do |t|
      t.integer :patient_id
      t.integer :medication_id
      t.string :dosing_frequency
      t.string :provider
      t.string :rx_number
      t.string :pharamacy_name

      t.timestamps
    end
  end
end
