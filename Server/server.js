const express = require('express')
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express()

const PORT = process.env.PORT || 3001
const db = require('./db')

const server = http.createServer(app);

const io = socketIo(server);


const UserController = require('./controllers/UserControllers')
const DuasController = require('./controllers/DuasControllers')
const EventsController =require('./controllers/EventsControllers')
const FriendsipControllers =require('./controllers/FrienshipControllers.js')
const ChatControllers = require ('./controllers/ChatControllers.js')
const MessagesControllers= require('./controllers/MessagesControllers.js')

app.use(cors())
app.use(express.json())


// Socket.io event handling
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('sendMessage', ({ content }) => {
    console.log('Received message:', content);

    // Broadcast the message to all connected clients except the sender
    socket.broadcast.emit('message', { content });
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});




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

app.get('/users/:id',UserController.getUserById);

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


//CRUD Routes - Freindships 
app.get('/friendships/id/:id', FriendsipControllers.searchFriendshipsByLoggedInUserId);
app.post('/friendships',FriendsipControllers. createFriendship);
app.get('/friendships',FriendsipControllers.getFriendships);
app.patch('/friendships',FriendsipControllers.updateFriendship);
app.delete('/friendships',FriendsipControllers. deleteFriendship);

//CRUD Routes - Chat 
app.get('/chats', ChatControllers.getAllChats)
app.post('/chats', ChatControllers.createChat)
app.get('/chat/:userId',ChatControllers.findUserChat)
app.get('/find/:firstId/:secondId',ChatControllers.findChat)
app.delete('/chat/:chatId',ChatControllers.deleteChat)

//CRUD Routes - messages 

app.post('/message',MessagesControllers.createMessage)
app.get('/messages/:chatId',MessagesControllers.getMessage)
app.get('/messages',MessagesControllers.getAllMessages)

app.delete('/message',MessagesControllers.deleteMessage)
