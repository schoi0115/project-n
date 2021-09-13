class AddAdmittedColumnToPatients < ActiveRecord::Migration[6.1]
  def change
    add_column :patients, :admitted, :boolean
  end
end
