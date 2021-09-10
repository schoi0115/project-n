class CreateProject4s < ActiveRecord::Migration[6.1]
  def change
    create_table :project4s do |t|
      t.string :title
      t.integer :year
      t.string :feeling
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
