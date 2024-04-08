
const {User} = require('../models')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        return res.status(201).json({user})
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('User deleted')
        } else {
            throw new Error ('User not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const editUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            return res.status(200).json(user)
        } else {
            throw new Error ('User not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    editUser
}