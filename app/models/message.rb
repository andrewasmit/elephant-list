class Message < ApplicationRecord
    belongs_to :user

    validates_presence_of :body, :user_id, :recipient_id, :chatroom_id
    validates_length_of :body, maximum: 300
    validates_length_of :body, minimum: 2


    def check_for_chatroom
        author = User.find(user_id)
        recipient = User.find(recipient_id)
        chatroom = Chatroom.where(user_a_id: author.id, user_b_id:recipient.id).or(Chatroom.where(user_a_id: recipient.id, user_b_id: author.id))
        chatroom.length == 1
    end

end
