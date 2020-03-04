const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.findOne({ fileToWrite: true }, (err, user) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (user) {
      res.status(200).send({
        name: user.name,
        fatherName: user.fatherName,
        id: user.id,
        createdDate: user.createdDate,
        expireDate: user.expireDate
      });
    } else {
      res.status(200).send("");
    }
  });
};
