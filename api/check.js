const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.findOne({ fileToWrite: true }, (err, user) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(user);
  });
};
