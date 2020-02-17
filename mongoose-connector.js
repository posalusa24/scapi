const mongoose = require('mongoose');

const DB_NAME = "scapi";
const MONGODB_URI = process.env.MONGO_URL + "/" + DB_NAME + "?retryWrites=true&w=majority";

exports.connection = mongoose.createConnection(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
