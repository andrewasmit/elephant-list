class PostsController < ApplicationController

    private
    def post_params
        params.permit(:title, :description, :image, pictures: [])
    end
end
