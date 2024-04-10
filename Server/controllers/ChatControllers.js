const  ChatModel  = require('../models/ChatModel')

const getAllChats = async (req, res) => {
    try {
        const chats = await ChatModel.find()
        res.status(200).json(chats)
    } catch (error) {
        console.log('Error fetching chats:', error);
        res.status(500).json({ message: 'Error fetching chats' })
    }
}

const createChat = async (req, res) => {
    const { firstId, secondId } = req.body
    try {
        const chat = await ChatModel.findOne({
            members: { $all: [firstId, secondId] },
        });
        if (chat) {
            return res.status(200).json(chat)
        }

        const newChat = new ChatModel({
            members: [firstId, secondId],
        });
        const response = await newChat.save()
        res.status(200).json(response);
    } catch (error) {
        console.log('Error Creating Chat ', error);
        res.status(500).json({ message: 'Error creating chat' })
    }
}

const findUserChat = async (req, res) => {
    const userId = req.params.userId
    try {
        const chats = await ChatModel.find({ members: userId })
        res.status(200).json(chats)
    } catch (error) {
        console.log('Error Finding User Chat ', error)
        res.status(500).json({ message: 'Error finding user chat' })
    }
}

const findChat = async (req, res) => {
    const { firstId, secondId } = req.params
    try {
        const chat = await ChatModel.find({ members: { $all: [firstId, secondId] } })
        res.status(200).json(chat)
    } catch (error) {
        console.log('Error Finding Chat ', error)
        res.status(500).json({ message: 'Error finding chat' })
    }
}
const deleteChat = async (req, res) => {
    const { chatId } = req.params; // Assuming chatId is passed in the request params

    try {
        const deletedChat = await ChatModel.findByIdAndDelete(chatId)

        if (!deletedChat) {
            return res.status(404).json({ message: 'Chat not found' })
        }

        res.status(200).json({ message: 'Chat deleted successfully', deletedChat })
    } catch (error) {
        console.log('Error deleting chat:', error)
        res.status(500).json({ message: 'Error deleting chat' })
    }
}


module.exports = {
    createChat,
    findUserChat,
    findChat,
    deleteChat,
    getAllChats
}
