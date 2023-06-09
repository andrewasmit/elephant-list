class Donation < ApplicationRecord
    belongs_to :post
    has_many :reviews

    def donor
        post = Post.find(self.post_id)
        donor = User.find(post.user_id)
        donor.username
    end

    def review
        Review.find(self.review_id)
    end

end
