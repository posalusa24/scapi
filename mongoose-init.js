const mongoose = require('mongoose');

const DB_NAME = "scapi";
const MONGODB_URI = process.env.MONGO_URL + "/" + DB_NAME + "?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

exports.userModel = mongoose.model('User', {
  name: String,
  fatherName: String,
  id: Number,
  createdDate: Date,
  expireDate: Date,
  fileToWrite: { type: Boolean, default: false },

  //lastLogin: Date,
  //lastLogout: Date,
  history: [Date],
  loggedIn: Boolean
});
