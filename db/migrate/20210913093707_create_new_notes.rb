class CreateNewNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :new_notes do |t|
      t.text :note
      
      t.belongs_to :patient
      t.belongs_to :user

      t.timestamps
    end
  end
end
