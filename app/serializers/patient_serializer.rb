class PatientSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :d_o_b, :email, :password
end
