class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.integer :auther_id
      t.integer :recipient_id
      t.string :body

      t.timestamps
    end
  end
end
