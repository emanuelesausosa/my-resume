const Experience = require("../models").Experience;

module.exports = {
  // get all
  list(req, res) {
    return Experience.all()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },
  //create/add new
  create(req, res) {
    return Experience.create({
      title: req.body.title,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      briefDescription: req.body.briefDescription,
      companyName: req.body.companyName,
      companyItem: req.body.companyItem, // rubro
      companyLogo: req.body.companyLogo,
      current: req.body.current
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  }
  // get first

  // update
  // delete
};
