class Patient < ApplicationRecord
    has_many :new_notes
    belongs_to :user

    validates_presence_of :name, :address, :injury, :mechanism_of_injury, :age, :weight, :difficulty
    validates_numericality_of :age, :weight, :difficulty, greater_than: 0
    validates :difficulty, inclusion: 0..10
    
end
