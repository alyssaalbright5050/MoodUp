const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserResponses = new Schema({
  users_id: {
    type: String,
    required: true
  },
  date: {
    type: date,
    required: true
  },
  qone: {
    type: Number,
    required: true
  },
  qtwo: {
    type: Number,
    required: true
  },
  qthree: {
    type: Number,
    required: true
  },
  qfour: {
    type: Number,
    required: true
  },
  qfive: {
    type: Number,
    required: true
  },
  qfive: {
    type: Number,
    required: true
  },
  totalscore: {
    type: Date,
    default: Date.now
  }
});
module.exports = UserResponses = mongoose.model("responses", UserResponsesSchema);