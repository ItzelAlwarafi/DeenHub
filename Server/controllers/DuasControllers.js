const {Dua} = require('../models')


const createDua = async (req, res) => {
    try {
        const dua = new Dua(req.body)
        await dua.save()
        return res.status(201).json({dua})
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


const getAllDuas = async (req, res) => {
    try {
        const duas = await Dua.find({})
        res.json(duas)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


const deleteDua = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Dua.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Dua deleted')
        } else {
            throw new Error ('Dua not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}
const editDua = async (req, res) => {
    try {
        const {id} = req.params
        const dua = await Dua.findByIdAndUpdate(id, req.body, {new: true})
        if (dua) {
            return res.status(200).json(dua)
        } else {
            throw new Error ('Dua not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports = {
   
    createDua,
    getAllDuas,
    deleteDua,
    editDua
    
}