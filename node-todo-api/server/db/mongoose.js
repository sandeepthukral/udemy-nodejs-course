const mongoose = require("mongoose");

const db_url = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(db_url, {
  useMongoClient: true
});

module.exports = {mongoose} ;