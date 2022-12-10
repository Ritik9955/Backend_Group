const Application = require("../models/Application");
const jwt = require("jsonwebtoken");

module.exports = {
  add: async (req, res) => {
    try {
      const existEmail = await Application.findOne({ email: req.body.email });
      const existPhone = await Application.findOne({ phone: req.body.phone });

      const Application = new Application(req.body);
      Application.save((error, result) => {
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    Application.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
};
