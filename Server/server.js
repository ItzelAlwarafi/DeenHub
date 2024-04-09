const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')

const UserController = require('./controllers/UserControllers')
const DuasController = require('./controllers/DuasControllers')
const EventsController =require('./controllers/EventsControllers')
const MessagesControllers = require('./controllers/MessagesControllers.js')
const FriendsipControllers =require('./controllers/FrienshipControllers.js')
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

//CRUD Routes - messages 
app.post('/messages', MessagesControllers.createMessage);
app.get('/messages/:senderId/:receiverId', MessagesControllers.getMessagesBetweenUsers);
app.patch('/messages/:id', MessagesControllers.updateMessage);
app.delete('/messages/:id', MessagesControllers.deleteMessage);

//CRUD Routes - Freindships 
app.post('/friendships',FriendsipControllers. createFriendship);
app.get('/friendships',FriendsipControllers.getFriendships);
app.patch('/friendships',FriendsipControllers.updateFriendship);
app.delete('/friendships',FriendsipControllers. deleteFriendship);
