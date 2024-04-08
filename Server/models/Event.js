const { Schema } = require('mongoose')

const eventSchema = new Schema({
    
    title: { type: String, required: true },
    description: { type: String, required: true },
    start_date: { type: Date, required: true },
    start_time: { type: String, required: true },
    street_address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    longitude: { type: Number, required: true },
    img:{type:String,required:true},
    latitude: { type: Number, required: true },
    
}, { timestamps: true })

module.exports = eventSchema
