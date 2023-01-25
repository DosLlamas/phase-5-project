class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.integer :patient_medication_id
      t.string :time
      t.string :date
      t.timestamps
    end
  end
end
