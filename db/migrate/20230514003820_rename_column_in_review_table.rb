class RenameColumnInReviewTable < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :author_id, :user_id
  end
end
