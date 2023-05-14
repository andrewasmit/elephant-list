class User < ApplicationRecord
    has_secure :password
    has_many :posts
    has_many :transactions, through: :posts
end
