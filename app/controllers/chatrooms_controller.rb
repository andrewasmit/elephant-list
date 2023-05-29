class ChatroomsController < ApplicationController
    before_action :check_for_chatroom

    def create
        chatroom = Chatroom.create!(chatroom_params)
        chatroom.messages.create!(message_params)
        render json: chatroom.messages, status: :created
    end

    def destroy
        chatroom = Chatroom.find(params[:id])
        chatroom.destroy
    end

    private
    def chatroom_params
        params.permit(:user_a_id, :user_b_id)
    end

    def message_params
        params.permit(:body, :user_id, :chatroom_id, :recipient_id )
    end

    def check_for_chatroom
        author = User.find(session[:user_id])
        recipient = User.find(params[:recipient_id])
        chatroom = Chatroom.where(user_a_id: author.id, user_b_id:recipient.id).or(Chatroom.where(user_a_id: recipient.id, user_b_id: author.id))
        render json: { error: "You already have a chatroom associated with this user. You can not create a new one" }, status: :unauthorized unless chatroom.length != 1
    end

end
