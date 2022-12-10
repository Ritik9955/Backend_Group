
const jwt = require("jsonwebtoken");
const Appointment = require("../models/Appointment");

module.exports = {
  add: async (req, res) => {
    try {
      // const existEmail = await Appointment.findOne({ email: req.body.email });
      // const existPhone = await Appointment.findOne({ phone: req.body.phone });

      // if (existEmail) {
      //   return res
      //     .status(400)
      //     .json({ success: false, data: "Email already exist" });
      // }

      // if (existPhone) {
      //   return res
      //     .status(400)
      //     .json({ success: false, data: "Phone already exist" });
      // }

      const appointment = new Appointment(req.body);
      appointment.save((error, result) => {
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    Appointment.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
  
  
};
