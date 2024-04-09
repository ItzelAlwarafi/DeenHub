const db = require('../db')
const {User } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main=  async ()=>{

const users = [
  {
    first_name: 'Alice',
    last_name: 'Johnson',
    user_name: 'alicej',
    email: 'alicej@example.com',
    password: 'alice123',
    date_of_birth: new Date('1995-03-15'),
    gender: 'Female',
    joined_date: new Date('2020-01-10'),
    longitud: 40.7128,
    latitud: -74.0060,
  },
  {
    first_name: 'Bob',
    last_name: 'Smith',
    user_name: 'bobsmith',
    email: 'bobsmith@example.com',
    password: 'bob456',
    date_of_birth: new Date('1988-09-25'),
    gender: 'Male',
    joined_date: new Date('2019-07-20'),
    longitud: 34.0522,
    latitud: -118.2437,
  },
  {
    first_name: 'Charlie',
    last_name: 'Brown',
    user_name: 'charlieb',
    email: 'charlieb@example.com',
    password: 'charlie789',
    date_of_birth: new Date('1990-11-05'),
    gender: 'Male',
    joined_date: new Date('2021-03-05'),
    longitud: 51.5074,
    latitud: -0.1278,
  },
  {
    first_name: 'David',
    last_name: 'Miller',
    user_name: 'davidm',
    email: 'davidm@example.com',
    password: 'david123',
    date_of_birth: new Date('1992-07-10'),
    gender: 'Male',
    joined_date: new Date('2018-05-12'),
    longitud: 48.8566,
    latitud: 2.3522,
  },
  {
    first_name: 'Ella',
    last_name: 'Thomas',
    user_name: 'ellat',
    email: 'ellat@example.com',
    password: 'ella456',
    date_of_birth: new Date('1997-01-20'),
    gender: 'Female',
    joined_date: new Date('2020-11-30'),
    longitud: 35.6895,
    latitud: 139.6917,
  },
  {
    first_name: 'Frank',
    last_name: 'Wilson',
    user_name: 'frankw',
    email: 'frankw@example.com',
    password: 'frank789',
    date_of_birth: new Date('1985-04-03'),
    gender: 'Male',
    joined_date: new Date('2017-09-15'),
    longitud: 55.7558,
    latitud: 37.6176,
  },
  {
    first_name: 'Grace',
    last_name: 'Anderson',
    user_name: 'gracea',
    email: 'gracea@example.com',
    password: 'grace123',
    date_of_birth: new Date('1994-08-12'),
    gender: 'Female',
    joined_date: new Date('2019-04-25'),
    longitud: -33.8688,
    latitud: 151.2093,
  },
  {
    first_name: 'Henry',
    last_name: 'Martinez',
    user_name: 'henrym',
    email: 'henrym@example.com',
    password: 'henry456',
    date_of_birth: new Date('1989-12-30'),
    gender: 'Male',
    joined_date: new Date('2016-10-08'),
    longitud: 40.7306,
    latitud: -73.9352,
  },
  {
    first_name: 'Isabel',
    last_name: 'Davis',
    user_name: 'isabeld',
    email: 'isabeld@example.com',
    password: 'isabel789',
    date_of_birth: new Date('1996-06-08'),
    gender: 'Female',
    joined_date: new Date('2021-01-18'),
    longitud: 37.7749,
    latitud: -122.4194,
  },
  {
    first_name: 'Jack',
    last_name: 'Clark',
    user_name: 'jackc',
    email: 'jackc@example.com',
    password: 'jack123',
    date_of_birth: new Date('1993-10-17'),
    gender: 'Male',
    joined_date: new Date('2022-02-28'),
    longitud: 52.5200,
    latitud: 13.4050,
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

