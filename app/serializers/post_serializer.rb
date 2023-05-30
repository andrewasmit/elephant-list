class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :zipcode, :image_url,:created_at, :updated_at, :donation_id, :user_id
end
