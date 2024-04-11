const {MessageModel} = require('../models')


const createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body

    try {
      
        const message = new MessageModel({
            chatId,
            senderId,
            text
        })

        // Save the message to the database
        const savedMessage = await message.save()

        // Send the saved message in the response
        res.status(201).json(savedMessage)
    } catch (error) {
        console.error('Error creating a message:', error);
        res.status(500).json({ message: 'Error creating a message' })
    }
}

const getAllMessages = async (req, res) => {
    try {
        const messages = await MessageModel.find()
        res.status(200).json(messages)
    } catch (error) {
        console.error('Error fetching messages:', error)
        res.status(500).json({ message: 'Error fetching messages' })
    }
}

const deleteMessage = async (req, res) => {
    const { messageId } = req.params

    try {
        const deletedMessage = await MessageModel.findByIdAndDelete(messageId)

        if (!deletedMessage) {
            return res.status(404).json({ message: 'Message not found' })
        }

        res.status(200).json({ message: 'Message deleted successfully', deletedMessage })
    } catch (error) {
        console.error('Error deleting message:', error)
        res.status(500).json({ message: 'Error deleting message' })
    }
}

const getMessage = async (req, res) => {
    const { chatId } = req.params;

    try {
        console.log('Received chatId:', chatId);

        const messages = await MessageModel.find({  chatId });

        if (!messages || messages.length === 0) {
            console.log('Messages not found for chatId:', chatId);
            return res.status(404).json({ message: 'Messages not found for this chatId' });
        }

        console.log('Found messages:', messages);
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ message: 'Error fetching messages' });
    }
}



module.exports = {
    createMessage,
    getAllMessages,
    deleteMessage,
    getMessage
}
