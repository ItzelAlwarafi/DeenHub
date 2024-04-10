const MessageModel = require('../models/MessageModel')

// Create a new message


const createMessage = async ( req,res) => {
    const {chatId,senderId,text} = req.body

const message = new MessageModel ({
    chatId,senderId,text
})
try{
    const response =  await message.save()
    res.status(200).json(response)
}
}







module.exports = {
    createMessage
    
}

