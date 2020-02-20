const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.deleteOne({ uitID: req.query.uitID }, (err) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Deleted');
  });
};
