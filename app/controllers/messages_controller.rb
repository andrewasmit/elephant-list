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
end
