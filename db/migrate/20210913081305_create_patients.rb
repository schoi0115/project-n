class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.integer :age
      t.float :weight
      t.string :address
      t.float :difficulty
      t.text :injury
      t.text :mechanism_of_injury
      t.belongs_to :user
    
      t.timestamps
    end
  end
end


