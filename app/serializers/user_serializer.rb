class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :all_chatrooms
  has_many :posts
  has_many :reviews

  def all_chatrooms
    chatrooms = Chatroom.where(user_a_id: self.object.id).or(Chatroom.where(user_b_id: self.object.id))
    chatrooms.map do |chatroom|
        chatroom.messages.map do |message|
          {
            id: message.id,
            body: message.body,
            user_id: message.user_id,
            recipient_id: message.recipient_id
          }
        end
    end
end

end
