const proforma_invoices = require("../models/proforma_invoices");
const jwt = require("jsonwebtoken");

module.exports = {
  add: async (req, res) => {
    try {
      const proforma_invoices = new proforma_invoices(req.body);
      proforma_invoices.save((error, result) => {
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    proforma_invoices.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
};
