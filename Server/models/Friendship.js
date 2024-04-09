const { Schema } = require('mongoose');

const friendshipSchema = new Schema({
  user1_id: { type: Schema.Types.ObjectId, ref: 'User' },
  user2_id: { type: Schema.Types.ObjectId, ref: 'User' },
  friends_since: { type: Date, default: Date.now }, // Use default value for current date
  f_status: { type: String, required: false } // Updated to lowercase 'status' and 'required' option
}, { timestamps: true });

module.exports = friendshipSchema;

