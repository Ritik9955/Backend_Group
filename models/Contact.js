const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  Email: {
    type: String,
  },
  
  Phone: {
    type: Number,
  },
  message: {
    type: String,
  }
});

module.exports = mongoose.model("Contact", ContactSchema);
