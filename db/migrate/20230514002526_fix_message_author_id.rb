class FixMessageAuthorId < ActiveRecord::Migration[7.0]
  def change
    rename_column :messages, :auther_id, :author_user_id
  end
end
