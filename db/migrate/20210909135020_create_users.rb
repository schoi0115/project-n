class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :capacity
      t.integer :age
      t.string :first_name
      t.string :last_name

      t.timestamps
    end
  end
end
