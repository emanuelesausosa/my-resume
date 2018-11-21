const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

// init express app
const app = express();

//setup logger
app.use(logger("dev"));

//setup body-parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// setup default catch out all request
require("./server/routes/")(app);
app.get("*", (req, res) => {
  res.status(200).send({ message: "starting up" });
});

// module exports
module.exports = app;
