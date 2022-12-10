const mongoose = require("mongoose");

const LeadSchema = mongoose.Schema({
  Organization_name: {
    type: String,
  },

  Contact_Name: {
    type: String,
  },
  Designation: {
    type: String,
  },
  Phone_Number: {
    type: Number,
  },
  Subject: {
    type: String,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
  },
  Message: {
    type: String,
  },
});

module.exports = mongoose.model("Lead", LeadSchema);
