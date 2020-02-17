const mongoose = require('mongoose');

const DB_NAME = "scapi";
const MONGODB_URI = process.env.MONGO_URL + "/" + DB_NAME + "?retryWrites=true&w=majority";

/*let cachedDb = null;

async function connectDb(uri) {
  if (cachedDb) {
    return cachedDb;
  }
  await mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
  return cachedDb = mongoose.connection;
}*/

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

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = async (req, res) => {
  const { uitID = 1337 } = req.query;
  User.findOne({ uitID: uitID }, (err, user) => {
    res.status(200).send(user);
  });
}
