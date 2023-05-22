class ReviewsController < ApplicationController

    def create
        donation = Donation.find(params[:donation_id])
        review = donation.reviews.create!(review_params)
        render json: review, status: :created
    end



    private
    def review_params
        params.permit(
            :id, 
            :user_id, 
            :reviewed_id, 
            :donation_id, 
            :body, 
            :rating )
    end



end
