class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :author_id
      t.integer :reviewed_id
      t.integer :rating
      t.string :body
      t.integer :transaction_id

      t.timestamps
    end
  end
end
