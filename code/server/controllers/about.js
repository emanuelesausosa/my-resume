const About = require("../models").About;

module.exports = {
  // order to create/add about at db
  create(req, res) {
    return About.create({
      brief_description: req.body.briefDescription,
      nick_name: req.body.nickName,
      email: req.body.email,
      address: req.body.address,
      phone_number: req.body.phoneNumber,
      nationality: req.body.nationality
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(401).send({ message: err });
      });
  },

  // get all
  list(req, res) {
    return About.all()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res
          .status(400)
          .send({ message: err.message || err.message.toString() });
      });
  },

  // get about by id
  findById(req, res) {
    return About.findById(req.params.id)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(400).send({ message: err.message });
      });
  }
};
