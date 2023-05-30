class Post < ApplicationRecord
    has_many_attached :images
    has_one :donation
    belongs_to :user

    validates_presence_of :title, :description, :zipcode

end
