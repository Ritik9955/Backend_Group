// const { getAll, add } = require("../Controller/AppointmentController");

const { getAll, add } = require("../Controller/ProjectController");

const router = require("express").Router();
// const { add, getAll } = require("../controllers/ApplicationCont");
router.get("/getAll", getAll);
router.post("/add", add);

module.exports = router;
