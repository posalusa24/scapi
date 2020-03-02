const User = require('../mongoose-init').userModel;

module.exports = (req, res) => {
  User.findOne({ id: req.query.searchid }, async (err, user) => {
    if (err) return console.error(err);
    user.name = req.query.name || user.name;
    user.fatherName = req.query.fatherName || user.fatherName;
    user.id = req.query.id || user.id;
    user.createdDate = req.query.createdDate || user.createdDate;
    user.expireDate = req.query.expireDate || user.expireDate;
    user.fileToWrite = req.query.fileToWrite || user.fileToWrite;
    if (req.query.log) user.history.push(new Date(req.query.log));
    user.loggedIn = user.history.length%2;
    await user.save();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Updated');
  });
  /*User.updateOne({ uitID: req.query.uitID }, {
    name: req.query.name,
    fatherName: req.query.fatherName,
    uitID: req.query.uitID,
    createdDate: new Date(req.query.createdDate),
    expireDate: new Date(req.query.expireDate),
    lastLogin: date1 = new Date(req.query.lastLogin),
    lastLogout: date2 = new Date(req.query.lastLogout),
    loggedIn: date1 > date2
  }, (err) => {
    if (err) return console.error(err);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send('Updated');
  });*/
};
