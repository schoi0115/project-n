class Patient < ApplicationRecord
    has_many :new_notes
    belongs_to :user

end
