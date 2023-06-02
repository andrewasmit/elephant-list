class PostsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def create
        post = Post.create!(post_params)
        render json: post, include: :images, status: :created
    end

    def index
        posts = Post.all.order(created_at: :desc)
        render json: posts, status: :ok
    end

    def show
        post = Post.find(params[:id])
        render json: post, include: :images
    end

    private
    def post_params
        params.require(:post).permit(:title, :description, :zipcode, :user_id, :donation_id, images: [] )
    end

end
