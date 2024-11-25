const mongoose = require('mongoose')


const bookNowSchema = new mongoose.Schema({
  UserName: String,
  UserPhoneNumber: { type: String },
  userEmail: { type: String }, // Update field name to match request body
  Date: Date,
});

const BOOKNOW = mongoose.model('BookNow', bookNowSchema);

module.exports = BOOKNOW;