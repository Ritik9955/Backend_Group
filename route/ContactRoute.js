// const { getAll, add } = require("../Controller/AppointmentController");

const { getAll, add } = require("../Controller/ContactController");

const router = require("express").Router();
// const { add, getAll } = require("../controllers/ApplicationCont");
router.get("/getAll", getAll);
router.post("/add", add); 
router.get("/text", (req, res) => {
    res.send("Server is running");
  });

module.exports = router;
