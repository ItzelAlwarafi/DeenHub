const { Schema } = require('mongoose')

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  user_name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  password: { type: String, required: true },
  date_of_birth: { type: Date, required: true },
  gender: { type: String, required: true },
  joined_date: { type: Date,default: Date.now },
  longitud: { type: Number, required: false },
  latitud: { type: Number, required: false }
}, { timestamps: true })

module.exports = userSchema
