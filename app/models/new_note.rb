class NewNote < ApplicationRecord
    belongs_to :patients
    belongs_to :users
end
