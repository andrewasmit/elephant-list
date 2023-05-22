require 'faker'
puts 'Seeding 🌱'

User.create(
    username: "andrewasmit", 
    password: "123456",
    password_confirmation: "123456",
    email_address: Faker::Internet.email)

User.create(
    username: "Testing123", 
    password: "123456", 
    password_confirmation: "123456",
    email_address: Faker::Internet.email )

User.create(
    username: "Testing456", 
    password: "123456", 
    password_confirmation: "123456",
    email_address: Faker::Internet.email )

Post.create(
    title: "Diapers - Size 4",
    description: "I have a pack of size 4 diapers. Pampers brand. Never been opened.",
    zipcode: 75226,
    user_id: 1,
    donation_id: 1
)

Donation.create(
    post_id: 1,
    recipient_id: 2,
    review_id: 1
)


Review.create(
    user_id: 2,
    reviewed_id: 1,
    rating: 5,
    body: "Andrew was so nice. I would recommend 100%!",
    donation_id: 1
)

10.times do
Post.create(
    title: Faker::Commerce.material,
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 2),
)
end

Chatroom.create(
    user_a_id: 1,
    user_b_id: 2
)

Chatroom.create(
    user_a_id: 3,
    user_b_id: 1
)

5.times do
Message.create(
    user_id: 1,
    recipient_id: 2,
    body: Faker::Lorem.paragraph,
    chatroom_id: 1
)
end

5.times do
Message.create(
    user_id: 2,
    recipient_id: 1,
    body: Faker::Lorem.paragraph,
    chatroom_id: 1
)
end


5.times do
Message.create(
    user_id: 3,
    recipient_id: 1,
    body: Faker::Lorem.paragraph,
    chatroom_id: 2
)
end

5.times do
Message.create(
    user_id: 1,
    recipient_id: 3,
    body: Faker::Lorem.paragraph,
    chatroom_id: 2
)
end

puts "Done Seeding! ✅"