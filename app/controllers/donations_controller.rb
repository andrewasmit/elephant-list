class DonationsController < ApplicationController

    def create
        donation = Donation.create!(donation_params)
        post = Post.find(params[:post_id])
        post.donation_id = donation.id
        post.save
        render json: donation, status: :created
    end

    private
    def donation_params
        params.permit(:post_id, :recipient_id, :review_id)
    end
  
end
