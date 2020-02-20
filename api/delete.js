const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.deleteOne({ uitID: req.query.uitID }, (err) => {
    if (err) return console.error(err);
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
    res.send('Deleted');
  });
};
