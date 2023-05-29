class PostsController < ApplicationController

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def index
        render json: Post.all, status: :ok
    end

    private
    def post_params
        params.permit(:title, :description, :zipcode, :user_id, :donation_id, :image, pictures: [], )
    end

end
