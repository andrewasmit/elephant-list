class AddPostColumns < ActiveRecord::Migration[7.0]
  def change
    add_column :posts, :user_id, :integer
    add_column :posts, :transaction_id, :integer
    add_column :posts, :zipcode, :integer
  end
end
