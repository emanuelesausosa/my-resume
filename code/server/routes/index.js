const aboutApi = require("./about");
const experienceApi = require("./experience");
const skillApi = require("./skill");

module.exports = app => {
  app.use("/api/about", aboutApi);
  app.use("/api/experience", experienceApi);
  app.use("/api/skill", skillApi);
};
