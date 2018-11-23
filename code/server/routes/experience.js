const experienceController = require("../controllers").experience;
const express = require("express");
const router = express.Router();

router.get("/", experienceController.list);
router.get("/add", experienceController.create);

module.exports = router;
