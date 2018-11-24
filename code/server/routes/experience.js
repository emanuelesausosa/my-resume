const experienceController = require("../controllers").experience;
const express = require("express");
const router = express.Router();

router.get("/", experienceController.list);
router.post("/add", experienceController.create);

module.exports = router;
