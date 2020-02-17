const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.find((err, users) => {
    res.status(200).send(users);
  });
}
