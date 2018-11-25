const Education = require("../models/").Education;

module.exports = {
  create(req, res) {
    return Education.create({
      majorTitle: req.body.majorTitle,
      briefDescription: req.body.briefDescription,
      institution: req.body.institution,
      startYear: req.body.startYear,
      endYear: req.body.endYear,
      level: req.body.level
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  },

  list(req, res) {
    return Education.all()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  }
};
