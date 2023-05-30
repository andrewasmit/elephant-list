class ReviewsController < ApplicationController
    before_action :authorize_edit_review, only: [:update]

    def create
        donation = Donation.find(params[:donation_id])
        review = donation.reviews.create!(review_params)
        donation.review_id = review.id
        donation.save
        render json: review, status: :created
    end

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review, status: :ok
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

    def authorize_edit_review
        review = Review.find(params[:id])
        render json: { error: 'Only the author of the review can make edits' }, status: :unauthorized unless review.user_id == session[:user_id]
    end


end
