class CreateAdUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :ad_users do |t|
      t.string :content

      t.timestamps
    end
  end
end
