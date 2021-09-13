class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :weight, :address, :difficulty, :injury, :mechanism_of_injury, :admitted, :user_id
end
