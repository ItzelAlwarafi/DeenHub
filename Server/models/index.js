const mongoose = require('mongoose');
const userSchema = require('./User');
const eventSchema = require('./Event');
const duaSchema = require('./Dua');
const messageSchema = require('./MessageModel');
const friendshipSchema  = require('./Friendship')


const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);
const Dua = mongoose.model('Dua', duaSchema);
const Message = mongoose.model('Message', messageSchema);
const Friendship = mongoose.model('Friendship',friendshipSchema )


module.exports = {
    User,
    Event,
    Dua,
    Message,
    Friendship
};
