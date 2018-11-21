const aboutApi = require("./about");

module.exports = app => {
  app.use("/api/about", aboutApi);
};
