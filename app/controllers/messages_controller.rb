class MessagesController < ApplicationController
    before_action :authorize_message_changes, only: [:update]


    def create
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    def update
        message = Message.find(params[:id])
        message.update!(message_params)
        render json: message, status: :accepted
    end


    private
    def message_params
        params.permit(:id, :body, :user_id, :chatroom_id, :recipient_id )
    end

    def authorize_message_changes
        message = Message.find(params[:id])
        render json: { error: "You are not authorized to edit or delete messages that you did not create." }, status: :unauthorized unless message.user_id == session[:user_id]
    end

end
