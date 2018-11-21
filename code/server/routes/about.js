const aboutController = require("../controllers").about;
const express = require("express");
const router = express.Router();

router.get("/", aboutController.list);

router.post("/add", aboutController.create);

router.get("/:id", aboutController.findById);

module.exports = router;
