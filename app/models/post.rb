class Post < ApplicationRecord
    has_many_attached :images
    has_one :donation
    belongs_to :user

    validates_presence_of :title, :description, :zipcode
    validates :zipcode, zipcode: { country_code: :US,  message: 'is invalid or formatted incorrectly.' }


    def image_url
        if images.attached?
            images.map{ |img| Rails.application.routes.url_helpers.url_for(img)}
        end
    end

end
