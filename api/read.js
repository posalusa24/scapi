const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.find((err, users) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', 'https://rfidapp.netlify.com');
    res.status(200).send(users);
  });
};
