class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :capacity, :age, :first_name, :last_name
end
