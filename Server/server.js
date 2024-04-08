const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')

const UserController = require('./controllers/UserControllers')
const DuasController = require('./controllers/DuasControllers')
const EventsController =require('./controllers/EventsControllers')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

// CRUD Routes - Users 
app.get('/users', UserController.getAllUsers)
app.post('/users', UserController.createUser)
app.patch('/users/:id', UserController.editUser)
app.delete('/users/:id', UserController.deleteUser)


// CRUD Routes - Duas
app.get('/duas', DuasController.getAllDuas)
app.post('/duas', DuasController.createDua)
app.patch('/users/:id', DuasController.editDua)
app.delete('/users/:id', DuasController.deleteDua)

// CRUD Routes - Events
app.get('/events', EventsController.getAllEvents)
app.get('/events/id/:id', EventsController.getEventById)
app.post('/events', EventsController.createEvent)
app.patch('/events/:id', EventsController.editEvent)
app.delete('/events/:id', EventsController.deleteEvent)