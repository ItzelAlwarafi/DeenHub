const mongoose = require('mongoose')
const { Schema } = mongoose

const messageSchema = new Schema({

    chatId: {type:mongoose.Schema.Types.ObjectId,
    ref:'ChatModel',
    require:true
    },
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
})

module.exports =  messageSchema
