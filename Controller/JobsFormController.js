
const jwt = require("jsonwebtoken");
const JobsForm = require("../models/JobsForm");
// const JobsForm = require("../models/JobsForm");

module.exports = {
  add: async (req, res) => {
    try {
      // const existEmail = await JobsForm.findOne({ email: req.body.email });
      // const existPhone = await JobsForm.findOne({ phone: req.body.phone });

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

      const jobsForm = new JobsForm(req.body);
      jobsForm.save((error, result) => {
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    JobsForm.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
  
  
};
