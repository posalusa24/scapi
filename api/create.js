const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  var user = new User({
    name: req.query.name,
    fatherName: req.query.fatherName,
    uitID: req.query.uitID,
    createdDate: new Date(req.query.createdDate),
    expireDate: new Date(req.query.expireDate)
  });
  user.save((err) => {
    if (err) return console.error(err);
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*' })
    res.send('Created');
  });
};
