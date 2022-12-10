const Client = require("../models/Client");
const jwt = require("jsonwebtoken");

module.exports = {
  add: async (req, res) => {
    try {
      const existEmail = await Client.findOne({ email: req.body.email });
      const existPhone = await Client.findOne({ phone: req.body.phone });

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

      const Client = new Client(req.body);
      Client.save((error, result) => {
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    Client.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
  getSingle: (req, res) => {
    Client.findById(req.params.id, (error, result) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: result });
    });
  },
  Client: async (req, res) => {
    try {
      const Client = await Client.findOne({ email: req.body.email });
      if (Client && Client.password == req.body.password) {
        const token = jwt.sign(JSON.stringify(Client), process.env.SECRET);
        return res.status(200).json({ success: true, data: token });
      } else {
        return res
          .status(400)
          .json({ success: false, data: "Email or password is wrong" });
      }
    } catch (error) {
      return res.status(400).json({ success: false, data: error.message });
    }
  },
};
