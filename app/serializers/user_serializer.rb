class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :capacity, :age, :first_name, :last_name, :patients, :total_cap, :difference


  def total_cap
    self.object.patients.where(admitted: true).sum(:difficulty)
  end

  def difference
    self.object.capacity - total_cap
  end

end
