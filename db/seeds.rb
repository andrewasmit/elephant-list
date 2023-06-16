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
    username: "Fake_User", 
    password: "123456", 
    password_confirmation: "123456",
    email_address: Faker::Internet.email )

diaper1 = Post.create(
    title: "Diapers - Size 4",
    description: "I have a pack of size 4 diapers. Pampers brand. Never been opened.",
    zipcode: 75226,
    user_id: 1,
    donation_id: 1
)
diaper1.images.attach(io: File.open(Rails.root.join('db/images/pampers.jpeg')),
filename: 'pampers.jpeg')
diaper1.images.attach(io: File.open(Rails.root.join('db/images/pampers2.jpeg')),
filename: 'pampers2.jpeg')
diaper1.images.attach(io: File.open(Rails.root.join('db/images/pampers3.jpeg')),
filename: 'pampers3.jpeg')

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

4.times do
p = Post.create(
    title: "Diapers - Size Newborn",
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
p.images.attach(io: File.open(Rails.root.join('db/images/pampers.jpeg')),
filename: 'pampers.jpeg')
p.images.attach(io: File.open(Rails.root.join('db/images/pampers2.jpeg')),
filename: 'pampers2.jpeg')
p.images.attach(io: File.open(Rails.root.join('db/images/pampers3.jpeg')),
filename: 'pampers3.jpeg')
p.images.attach(io: File.open(Rails.root.join('db/images/filler.jpeg')),
    filename: 'filler.jpeg')
end

2.times do
p = Post.create(
    title: "Baby Book Collection",
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
p.images.attach(io: File.open(Rails.root.join('db/images/books1.jpeg')),
filename: 'books1.jpeg')
p.images.attach(io: File.open(Rails.root.join('db/images/books2.jpeg')),
filename: 'books2.jpeg')
p.images.attach(io: File.open(Rails.root.join('db/images/books3.jpeg')),
filename: 'books3.jpeg')
p.images.attach(io: File.open(Rails.root.join('db/images/books4.jpeg')),
filename: 'books4.jpeg')
end

2.times do
p = Post.create(
    title: "Baby Bottles",
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
p.images.attach(io: File.open(Rails.root.join('db/images/bottles1.jpeg')),
filename: 'bottles1.jpeg')
p.images.attach(io: File.open(Rails.root.join('db/images/bottles2.jpeg')),
filename: 'bottles2.jpeg')
end

p1 = Post.create(
    title: "Sesame Street Clothes",
    description: "Size 18-24months. Various Sesame Street Themed clothes",
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
p1.images.attach(io: File.open(Rails.root.join('db/images/clothes1.jpg')),
filename: 'clothes1.jpg')
p1.images.attach(io: File.open(Rails.root.join('db/images/clothes2.jpg')),
filename: 'clothes2.jpg')
p1.images.attach(io: File.open(Rails.root.join('db/images/clothes3.jpg')),
filename: 'clothes3.jpg')
p1.images.attach(io: File.open(Rails.root.join('db/images/clothes4.jpg')),
filename: 'clothes4.jpg')
p1.images.attach(io: File.open(Rails.root.join('db/images/clothes5.jpg')),
filename: 'clothes5.jpg')

diaper2 = Post.create(
    title: "Huggies Overnight Diapers",
    description: "Size 2. Box is opened, but we only used a few of them",
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
diaper2.images.attach(io: File.open(Rails.root.join('db/images/huggieovernights.jpeg')),
filename: 'huggieovernights.jpeg')
diaper2.images.attach(io: File.open(Rails.root.join('db/images/filler.jpeg')),
filename: 'filler.jpeg')
diaper2.images.attach(io: File.open(Rails.root.join('db/images/filler2.jpeg')),
filename: 'filler2.jpeg')


pump = Post.create(
    title: "Breast Pump",
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
pump.images.attach(io: File.open(Rails.root.join('db/images/pump1.jpeg')),
filename: 'pump1.jpeg')
pump.images.attach(io: File.open(Rails.root.join('db/images/pump2.jpeg')),
filename: 'pump2.jpeg')

2.times do
p = Post.create(
    title: "Various sized diapers",
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
    p.images.attach(io: File.open(Rails.root.join('db/images/filler.jpeg')),
    filename: 'filler.jpeg')
    p.images.attach(io: File.open(Rails.root.join('db/images/filler2.jpeg')),
    filename: 'filler2.jpeg')
end

toy1 = Post.create(
    title: "Toy",
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
toy1.images.attach(io: File.open(Rails.root.join('db/images/toy1.jpeg')),
filename: 'toy1.jpeg')

toy2 = Post.create(
    title: "Stacker Toy",
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
toy2.images.attach(io: File.open(Rails.root.join('db/images/stacker2.jpeg')),
filename: 'stacker2.jpeg')

toy3 = Post.create(
    title: "Walker with interactive toy",
    description: Faker::Lorem.paragraph,
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
toy3.images.attach(io: File.open(Rails.root.join('db/images/walker.jpeg')),
filename: 'walker.jpeg')

diaper3 = Post.create(
    title: "HEB Brand Diapers",
    description: "Size 4.",
    zipcode: Faker::Address.zip_code,
    user_id: Faker::Number.between(from: 1, to: 3),
)
diaper3.images.attach(io: File.open(Rails.root.join('db/images/HEBaby.jpg')),
filename: 'HEBaby.jpg')
diaper3.images.attach(io: File.open(Rails.root.join('db/images/HEB2.jpeg')),
filename: 'HEB2.jpeg')
diaper3.images.attach(io: File.open(Rails.root.join('db/images/filler.jpeg')),
    filename: 'filler.jpeg')


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
    chatroom_id: 1,
    read: true
)

Message.create(
    user_id: 2,
    recipient_id: 1,
    body: Faker::Lorem.paragraph,
    chatroom_id: 1,
)
end
Message.create(
    user_id: 2,
    recipient_id: 1,
    body: Faker::Lorem.paragraph,
    chatroom_id: 1
)


5.times do
Message.create(
    user_id: 3,
    recipient_id: 1,
    body: Faker::Lorem.paragraph,
    chatroom_id: 2,
)

Message.create(
    user_id: 1,
    recipient_id: 3,
    body: Faker::Lorem.paragraph,
    chatroom_id: 2,
)
end

Message.create(
    user_id: 1,
    recipient_id: 3,
    body: Faker::Lorem.paragraph,
    chatroom_id: 2
)


puts "Done Seeding! ✅"