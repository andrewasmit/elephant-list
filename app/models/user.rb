class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :donations, through: :posts
    has_many :messages

    validates_presence_of :username, :password, :password_confirmation, :email_address
    validates_length_of :username, :email_address, maximum: 50
    validates_length_of :username, :email_address, :password, minimum: 6
    validates_format_of :email_address, with: URI::MailTo::EMAIL_REGEXP
    validates_uniqueness_of :username, :email_address

    def reviews
        Review.all.where(reviewed_id: session[:user_id])
    end
    

end