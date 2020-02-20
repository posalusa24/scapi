const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  var user = new User({
    name: req.query.name,
    fatherName: req.query.fatherName,
    uitID: req.query.uitID,
    createdDate: new Date(req.query.uitID),
    expireDate: new Date(req.query.uitID)
  });
  user.save((err) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Created');
  });
};
