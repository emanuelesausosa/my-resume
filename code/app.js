const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
import next from "next";

const port = process.env.PORT || 8000;
const ROOT_URL = process.env.ROOT_URL || `http://localhost:${port}`;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(logger("dev"));

  //setup body-parser config
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  require("./server/routes/")(server);
  server.get("*", (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`); // eslint-disable-line no-console
  });
});
