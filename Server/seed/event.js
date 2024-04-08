const db = require('../db');
const {Event} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  const events = [
    {
      title: "Islamic Conference",
      description: "Ramadan Series.",
      start_date: new Date("2024-04-15"),
      start_time: "19:00",
      street_address: "123 Main St",
      city: "Cityville",
      state: "Stateville",
      img: "https://img.freepik.com/free-vector/flat-ramadan-landing-page-template_23-2149331517.jpg",
      longitude: -73.935242,
      latitude: 40.73061
    },
    {
      title: "Islamic Conference",
      description: "Ramada Series",
      start_date: new Date("2024-05-10"),
      start_time: "18:30",
      street_address: "456 Elm St",
      city: "Art City",
      state: "Art State",
      img: "https://img.freepik.com/free-vector/gradient-ramadan-social-media-post-template_23-2149310334.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1701302400&semt=ais",
      longitude: -118.243683,
      latitude: 34.052235
    },
  ]

await Event.insertMany(events)
console.log('Events Seeded!')

}


const run = async () => {

  await main()
  
  db.close()
  }
  
  run()