class Patient < ApplicationRecord
    has_secure_password 
    has_many :patient_medications, dependent: :destroy
    has_many :medications, through: :patient_medications

    validates :first_name, :last_name, :email, :password, presence: true, on: :create
    validates :email, uniqueness: true
    validates :password, presence: true, on: :create

end
