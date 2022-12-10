const mongoose = require("mongoose");

const JobsFormSchema = mongoose.Schema({
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
  },
  resume :{
    type: String,
  }
});

module.exports = mongoose.model("JobsForm", JobsFormSchema);
