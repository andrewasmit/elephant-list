class User < ApplicationRecord
    has_secure :password
    has_many :reviews, through: :transactions
end
