const aboutApi = require("./about");
const experienceApi = require("./experience");

module.exports = app => {
  app.use("/api/about", aboutApi);
  app.use("/api/experience", experienceApi);
};
