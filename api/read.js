const User = require('../mongoose-init').userModel;

app.use((req, res, next) => {
  res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
  next();
});

module.exports = (req, res) => {
  User.find((err, users) => {
    if (err) return console.error(err);
    res.send(users);
  });
};
