const Lead = require("../models/Lead");
const jwt = require("jsonwebtoken");

module.exports = {
  add: async (req, res) => {
    try {
      const Lead = new Lead(req.body);
      Lead.save((error, result) => {
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    Lead.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
};
