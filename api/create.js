const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  var user = new User({
    name: req.query.name,
    fatherName: req.query.fatherName,
    id: req.query.id,
    createdDate: new Date(req.query.createdDate),
    expireDate: new Date(req.query.expireDate),
    history: [],
    loggedIn: false
  });
  user.save((err) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Created');
  });
};
