const Skill = require("../models").Skill;

module.exports = {
  //create
  create(req, res) {
    return Skill.create({
      title: req.body.title,
      percentage: req.body.percentage,
      yearsOn: req.body.yearsOn,
      type: req.body.type
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  },
  //list
  list(req, res) {
    return Skill.all()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send({ message: err });
      });
  }
};
