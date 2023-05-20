class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email_address, :all_chatrooms
  has_many :posts
  has_many :reviews

  def all_chatrooms
    byebug
    chatrooms = Chatroom.where(user_a_id: self.object.id).or(Chatroom.where(user_b_id: self.object.id))
    chatrooms.map do |chatroom|
        chatroom.messages
    end
end

end
