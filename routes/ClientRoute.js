const router = require("express").Router();
const {
  add,
  getAll,
  getSingle,
  Client,
} = require("../controllers/ClientController");
// const Client = require("../models/Client");

router.get("/getAll", getAll);
router.post("/add", add);
router.get("/getSingle/:id", getSingle);
router.post("/Client", Client);
module.exports = router;
