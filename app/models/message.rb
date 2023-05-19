class Message < ApplicationRecord
    belongs_to :user

    validates_presence_of :body, :user_id, :recipient_id, :chatroom_id
    validates_length_of :body, maximum: 300
    validates_length_of :body, minimum: 2
end
