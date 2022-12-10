const Invoices = require("../models/Invoices");
const jwt = require("jsonwebtoken");

module.exports = {
  add: async (req, res) => {
    try {
      const existEmail = await Invoices.findOne({ email: req.body.email });
      const existPhone = await Invoices.findOne({ phone: req.body.phone });

      if (existEmail) {
        return res
          .status(400)
          .json({ success: false, data: "Email already exist" });
      }

      if (existPhone) {
        return res
          .status(400)
          .json({ success: false, data: "Phone already exist" });
      }

      const Invoices = new Invoices(req.body);
      Invoices.save((error, result) => {
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    Invoices.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
};
