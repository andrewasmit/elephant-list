class Post < ApplicationRecord
    has_one_attached :image
    has_many_attached :pictures
    has_rich_body :text
end
