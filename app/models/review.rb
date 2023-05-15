class Review < ApplicationRecord
    belongs_to :donation

    def reviewed_user_id
        post = Post.find(self.reviewed_id)
        user = User.find(post.user_id)
        user.id
    end
    
end