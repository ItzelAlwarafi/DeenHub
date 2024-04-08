const db = require('../db')
const {User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main=  async ()=>{

const users = [
    {
      first_name: "John",
      last_name: "Doe",
      user_name: "johndoe",
      email: "johndoe@example.com",
      password: "password123",
      date_of_birth: new Date("1990-01-01"),
      gender: "Male",
      joined_date: new Date(),
      longitude: -73.935242,
      latitude: 40.73061
    },
    {
      first_name: "Jane",
      last_name: "Smith",
      user_name: "janesmith",
      email: "janesmith@example.com",
      password: "securepass",
      date_of_birth: new Date("1985-05-15"),
      gender: "Female",
      joined_date: new Date(),
      longitude: -118.243683,
      latitude: 34.052235
    },
    
  ]

await User.insertMany(users)
 
console.log('Users Seeded! ')
}

const run = async () => {

await main()

db.close()
}

run()

