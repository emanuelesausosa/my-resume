const aboutApi = require("./about");
const experienceApi = require("./experience");
const skillApi = require("./skill");
const educationApi = require("./education");

const BASE_API = "/api";

module.exports = app => {
  app.use(`${BASE_API}/about`, aboutApi);
  app.use(`${BASE_API}/experience`, experienceApi);
  app.use(`${BASE_API}/skill`, skillApi);
  app.use(`${BASE_API}/education`, educationApi);
};
