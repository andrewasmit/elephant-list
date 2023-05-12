class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.integer :post_id
      t.integer :recipient_id

      t.timestamps
    end
  end
end
