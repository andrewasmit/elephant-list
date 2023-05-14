class RenameUserIdColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :messages, :auther_user_id, :user_id
  end
end
