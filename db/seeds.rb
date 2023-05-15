require 'faker'
puts 'Seeding 🌱'

User.create(
    username: "andrewasmit", 
    password: "123",
    email_address: Faker::Internet.email)

User.create(
    username: "Test1", 
    password: "123", 
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

5.times do
Message.create(
    user_id: 1,
    recipient_id: 2,
    body: Faker::Lorem.paragraph
)
end

5.times do
Message.create(
    user_id: 2,
    recipient_id: 1,
    body: Faker::Lorem.paragraph
)
end

puts "Done Seeding! ✅"