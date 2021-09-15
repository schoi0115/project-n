class User < ApplicationRecord
    has_secure_password
    has_many :patients
    has_many :new_notes

    validates :username, presence: true, uniqueness: true


end
