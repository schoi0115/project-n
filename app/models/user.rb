class User < ApplicationRecord
    has_secure_password
    has_many :project4s

    validates :username, presence: true, uniqueness: true
end
