const app = require('express')();
const mongoose = require('mongoose');

const DB_NAME = "scapi";
const MONGODB_URI = process.env.MONGO_URL + "/" + DB_NAME + "?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', {
  name: String,
  fatherName: String,
  uitID: Number,
  createdDate: Date,
  expireDate: Date,

  lastLogin: Date,
  lastLogout: Date,
  loggedIn: Boolean
});

app.get('/', (req, res) => {
  User.find((err, users) => {
    if (err) return console.error(err);
    res.send(users);
  });
});
app.post('/', (req, res) => {
  var user = new User({
    name: req.query.name,
    fatherName: req.query.fatherName,
    uitID: req.query.uitID,
    createdDate: new Date(req.query.createdDate),
    expireDate: new Date(req.query.expireDate)
  });
  user.save((err) => {
    if (err) return console.error(err);
    res.redirect('/');
  });
});
app.put('/', (req, res) => {
  User.updateOne({ uitID: req.query.uitID }, {
    lastLogin: date1 = new Date(req.query.lastLogin),
    lastLogout: date2 = new Date(req.query.lastLogout),
    loggedIn: date1 > date2
  }, (err) => {
    if (err) return console.error(err);
    res.redirect('/');
  });
});
app.delete('/', (req, res) => {
  User.deleteOne({ uitID: req.query.uitID }, (err) => {
    if (err) return console.error(err);
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Connected and listening on 3000');
});
