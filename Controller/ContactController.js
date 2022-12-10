// const Contact = require("../models/Contact");
const jwt = require("jsonwebtoken");
const Contact = require("../models/Contact");


module.exports = {
  add: async (req, res) => {
    try {
      
      console.log(req.body,"req.body");

      const contact = new Contact(req.body);
      
      contact.save((error, result) => {
        console.log(result,"result",error,'error');
        if (error){
          return res.status(400).json({ success: false, data: error.message });
        }
        return res.status(200).json({ success: true, data: result });
      });
    } catch (error) {
      console.log(error,'error');
      res.status(400).json({ success: false, data: error.message });
    }
  },
  getAll: (req, res) => {
    Contact.find((error, results) => {
      if (error)
        return res.status(400).json({ success: false, data: error.message });
      return res.status(200).json({ success: true, data: results });
    });
  },
  
  
};
