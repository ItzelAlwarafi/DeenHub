const mongoose = require ('mongoose')
const userSchema = require('./User')
const eventSchema = require('./Event')
const duaSchema = require('./Dua')

const User = mongoose.model('User',userSchema)
const Event = mongoose.model('Event',eventSchema)
const Dua = mongoose.model('Dua',duaSchema)


module.exports={
    User,
    Event,
    Dua,


}

