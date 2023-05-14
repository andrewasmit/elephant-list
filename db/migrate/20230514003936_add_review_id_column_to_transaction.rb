class AddReviewIdColumnToTransaction < ActiveRecord::Migration[7.0]
  def change
    add_column :transactions, :review_id, :integer
  end
end
