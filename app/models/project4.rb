class Project4 < ApplicationRecord
  belongs_to :user

  validates :title, presence: true
end
