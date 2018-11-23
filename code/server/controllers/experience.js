const Experience = require("../models").Experience;

module.exports = {
  // get all
  list(req, res) {
    return Experience.all()
      .then(data => {
        res.status().send(data);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },
  //create/add new
  create(req, res) {
    return Experience.create({
      title: req.body.title,
      startDate: req.body.title,
      endDate: req.body.title,
      briefDescription: req.body.title,
      companyName: req.body.title,
      companyItem: req.body.title, // rubro
      companyLogo: req.body.title,
      current: req.body.title
    })
      .then(data => {
        res.status().send(data);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  }
  // get first

  // update
  // delete
};
