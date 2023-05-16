class CreateChatrooms < ActiveRecord::Migration[7.0]
  def change
    create_table :chatrooms do |t|
      t.integer :user_a_id
      t.integer :user_b_id

      t.timestamps
    end
    add_column :messages, :chatroom_id, :integer
  end
end
