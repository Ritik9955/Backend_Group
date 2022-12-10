const mongoose = require("mongoose");

const ApplicationSchema = mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },

  //Shi

  phone: {
    type: Number,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Application", ApplicationSchema);
