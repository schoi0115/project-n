class User < ApplicationRecord
    has_secure_password
    has_many :patients
    has_many :new_notes

validates :age, numericality: { only_integer: true, greater_than: 18 }

validates :capacity, numericality: { greater_than: 0}

validates :username, uniqueness: true
   
validates_presence_of :username, :password, :capacity, :age, :first_name, :last_name


end
