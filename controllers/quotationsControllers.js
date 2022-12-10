const quotations = require("../models/quotations");
const jwt = require("jsonwebtoken");

module.exports = {
  add: async (req, res) => {
    try {
      const existEmail = await quotations.findOne({ email: req.body.email });
      const existPhone = await quotations.findOne({ phone: req.body.phone });

      const quotations = new quotations(req.body);
      quotations.save((error, result) => {
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    quotations.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
};
