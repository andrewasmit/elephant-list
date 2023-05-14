class Donation < ApplicationRecord
    belongs_to :post

    def donor
        post = Post.find(self.post_id)
        donor = User.find(post.user_id)
        donor.username
    end
end
