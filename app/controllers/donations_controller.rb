class DonationsController < ApplicationController

    def create
        donation = Donation.create!(donation_params)
        render json: donation, status: :created
    end

    private
    def donation_params
        params.permit(:post_id, :recipient_id, :review_id)
    end
  
end
