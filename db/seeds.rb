require 'faker'
puts 'Seeding!'

User.create(
    username: "andrewasmit", 
    password: "123",
    email_address: Faker::Internet.email)

User.create(
    username: "Test1", 
    password: "123", 
    email_address: Faker::Internet.email )


puts "Done Seeding!"