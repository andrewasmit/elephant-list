class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :donations, through: :posts
    has_many :messages

    validates_presence_of :username, :password, :password_confirmation, :email_address
    validates_length_of :username, :email_address, maximum: 50
    validates_length_of :username, :email_address, :password, minimum: 6
    validates_format_of :email_address, with: URI::MailTo::EMAIL_REGEXP




    def reviews
        reviewed_donations = self.donations if :review_id.present?
        reviewed_donations.map do |donation|
            Review.find(donation.review_id)
        end
    end

    def all_chatrooms
        chatrooms = Chatroom.where(user_a_id: self.id).or(Chatroom.where(user_b_id: self.id))
        chatrooms.map do |chatroom|
            chatroom.messages
        end
    end
    

end