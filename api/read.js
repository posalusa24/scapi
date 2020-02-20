const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.find((err, users) => {
    if (err) return console.error(err);
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' }).send(users);
  });
};
