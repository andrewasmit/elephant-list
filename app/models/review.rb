class Review < ApplicationRecord
    belongs_to :donation

    validates_presence_of :rating, :body, :user_id, :reviewed_id, :donation_id
    validates :rating, numericality: { greater_than_or_equal_to: 1 }

    def reviewed_user_id
        post = Post.find(self.reviewed_id)
        user = User.find(post.user_id)
        user.id
    end
    
end