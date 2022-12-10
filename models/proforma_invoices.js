const mongoose = require("mongoose");

const proforma_invoicessSchema = mongoose.Schema({
  Client_name: {
    type: String,
  },

  Client_Address: {
    type: String,
  },
  Billing_Address: {
    type: String,
  },
  Invoice_date: {
    type: Date,
  },
  Due_Date: {
    type: Date,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
  },
  GST: {
    type: Number,
  },
  Quantity: {
    type: Number,
  },
  Rate: {
    type: Number,
  },
  Item: {
    type: String,
  },
});

module.exports = mongoose.model("proforma_invoices", proforma_invoicessSchema);
