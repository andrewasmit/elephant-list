class User < ApplicationRecord
    has_secure_password
    has_many :posts
    has_many :donations, through: :posts
    has_many :messages

    def reviews
        reviewed_donations = self.donations if :review_id.present?
        reviewed_donations.map do |donation|
            Review.find(donation.review_id)
        end
    end

end
