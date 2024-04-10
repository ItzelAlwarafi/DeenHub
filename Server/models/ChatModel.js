const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    // other chat properties if any
}, { timestamps: true });

const ChatModel = mongoose.model('Chat', chatSchema);

module.exports = ChatModel;