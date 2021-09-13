class User < ApplicationRecord
    has_secure_password
    has_many :patients

    validates :username, presence: true, uniqueness: true
end
