const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
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

module.exports = mongoose.model("Appointment", AppointmentSchema);
