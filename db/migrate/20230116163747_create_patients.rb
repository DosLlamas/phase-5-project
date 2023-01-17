class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.date :d_o_b
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
