class Post < ApplicationRecord
    has_one_attached :image
    has_many_attached :pictures
    # has_rich_body :text
    has_one :donation
    belongs_to :user
end
