const router = require("express").Router();
const { add, getAll } = require("../controllers/InvoiceControllers");

router.get("/getAll", getAll);
router.post("/add", add);

module.exports = router;
