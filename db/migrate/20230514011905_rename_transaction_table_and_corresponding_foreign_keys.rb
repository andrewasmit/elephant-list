class RenameTransactionTableAndCorrespondingForeignKeys < ActiveRecord::Migration[7.0]
  def change
    rename_table :transactions, :donations
    rename_column :posts, :transaction_id, :donation_id
    rename_column :reviews, :transaction_id, :donation_id
  end
end
