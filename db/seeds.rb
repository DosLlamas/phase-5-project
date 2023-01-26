# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Patient.destroy_all
PatientMedication.destroy_all
Medication.destroy_all

puts "🌱 Seeding Patients..."
p1 = Patient.create(
    first_name: "Nasty",
    last_name: "Nate",
    d_o_b: "01-01-2001",
    email: "nasty@gmail.com",
    password: "password"
)

p2 = Patient.create(
    first_name: "John",
    last_name: "Doe",
    d_o_b: "09-09-1999",
    email: "baller@gmail.com",
    password: "password"
)
puts "🌱 Patients done"


puts "🌱 Seeding Medications..."
m1 = Medication.create(
    name: "Tylenol",
    strength: "500mg"
)
m2 = Medication.create(
    name: "Xanax",
    strength: "0.25mg"
)
m3 = Medication.create(
    name: "Percocet",
    strength: "2.5mg/325mg"
)
m4 = Medication.create(
    name: "Benadryl",
    strength: "25mg"
)
m5 = Medication.create(
    name: "Lipitor",
    strength: "10mg"
)
m6 = Medication.create(
    name: "Adderall",
    strength: "2.5mg"
)
m7 = Medication.create(
    name: "Levothyroxine",
    strength: "25mcg"
)
m8 = Medication.create(
    name: "Metformin",
    strength: "500mg"
)
puts "🌱 Medications done"


puts "🌱 Seeding Patient Medications..."
pm1 = PatientMedication.create(
    medication_id: m2.id,
    patient_id: p1.id,
    dosing_frequency: "twice a day",
    provider: "Dr. Strange",
    rx_number: "RX 101010",
    pharamacy_name: "CVS"
)

pm2 = PatientMedication.create(
    medication_id: m1.id,
    patient_id: p1.id,
    dosing_frequency: "three times a day",
    provider: "Dr. Strange",
    rx_number: "RX 123456",
    pharamacy_name: "Walgreens"
)

pm3 = PatientMedication.create(
    medication_id: m4.id,
    patient_id: p2.id,
    dosing_frequency: "Daily",
    provider: "Dr. Love",
    rx_number: "RX 000001",
    pharamacy_name: "Fast Pharmacy"
)
puts "🌱 PatientsMedications Done"

puts "🌱 Seeding Schedules..."
Schedule.create(
    patient_medication_id: pm2.id,
    time: "1300",
    date: "02-09-2023"
)