const { Schema } = require('mongoose')




const duaSchema = new Schema({
    arabic_text:{ type: String , required: true},
    transliteration:{ type: String , required: true},
    translation:{ type: String , required: true},

}, { timestamps: true })

module.exports = duaSchema
