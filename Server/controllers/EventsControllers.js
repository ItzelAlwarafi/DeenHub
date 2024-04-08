const {Event} = require('../models')


const createEvent= async (req, res) => {
    try {
        const event = new Event(req.body)
        await event.save()
        return res.status(201).json({event})
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find({})
        res.json(events)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Event.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Event deleted')
        } else {
            throw new Error ('Event not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const editEvent = async (req, res) => {
    try {
        const {id} = req.params
        const event= await Event.findByIdAndUpdate(id, req.body, {new: true})
        if (event) {
            return res.status(200).json(event)
        } else {
            throw new Error ('Event not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getEventById = async(req,res) => {
    try {
        const{id} = req.params
        const event = await Event.findById(id)
        if (event) {
            return res.json(event)
        }
        return res.status(404).send('Event not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = {
   
    createEvent,
    getAllEvents,
    deleteEvent,
    editEvent,
    getEventById
    
}