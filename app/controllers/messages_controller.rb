class MessagesController < ApplicationController


    def create
        # Check logged in user for already created chatroom with recipient id
        # user = User.find(session[:user_id])
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    private
    def message_params
        params.permit(:body, :user_id, :chatroom_id, :recipient_id )
    end

    # def check_for_chatroom
    #     author = User.find(session[:user_id])
    #     recipient = User.find(recipient_id)
    #     chatroom = Chatroom.where(user_a_id: author.id, user_b_id:recipient.id).or(Chatroom.where(user_a_id: recipient.id, user_b_id: author.id))
    # end

end
