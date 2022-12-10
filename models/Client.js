const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema({
  Business_name: {
    type: String,
    required: [true, "Full name is required"],
  },

  Business_Alias: {
    type: String,
    required: [true, "Full name is required"],
  },
  Unique_Key: {
    type: String,
    required: [true, "Full name is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone is required"],
  },
  state: {
    type: String,
  },
  VAT: {
    type: String,
  },
  logo: {
    type: String,
  },

  Com_add: {
    type: String,
  },
  Com_State: {
    type: String,
  },
  Com_Zip: {
    type: String,
  },

  Com_City: {
    type: String,
  },

  //Shi

  Shi_city: {
    type: String,
  },
  Shi_zipcode: {
    type: Number,
  },
  Shi__address: {
    type: String,
  },
  Shi__State: {
    type: String,
  },
  Shi__Zip: {
    type: String,
  },

  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

module.exports = mongoose.model("Client", ClientSchema);
