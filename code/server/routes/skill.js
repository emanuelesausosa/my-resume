const skillController = require("../controllers").skill; // get cnotroller
const express = require("express"); // get express
const router = express.Router(); // get router

//set routes
router.get("/", skillController.list);
router.post("/add", skillController.create);

module.exports = router;
