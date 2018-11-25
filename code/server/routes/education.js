const educationController = require("../controllers").education;
const express = require("express"); // express instance
const router = express.Router(); // router

router.get("/", educationController.list);
router.post("/add", educationController.create);

module.exports = router;
