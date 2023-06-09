class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index
        render json: User.all, status: :ok
    end

    def my_profile
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    def update
        user = User.find(session[:user_id])
        user.update(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(session[:user_id])
        user.destroy
        head :no_content
    end


    private

    def user_params
        params.permit(
            :username, 
            :password, 
            :password_confirmation, 
            :email_address)
    end
end
