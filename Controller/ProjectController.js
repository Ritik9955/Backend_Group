const Project = require("../models/Project");
const jwt = require("jsonwebtoken");

module.exports = {
  add: async (req, res) => {
    try {
      

      const project = new Project(req.body);
      project.save((error, result) => {
        // console.log(res,"success");
        if (error)
          return res.status(400).json({ success: false, data: error.message });
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    Project.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
  getSingle: (req, res) => {
    Project.findById(req.params.id, (error, result) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: result });
    });
  },
  Project: async (req, res) => {
    try {
      const Project = await Project.findOne({ email: req.body.email });
      if (Project && Project.password == req.body.password) {
        const token = jwt.sign(JSON.stringify(Project), process.env.SECRET);
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
