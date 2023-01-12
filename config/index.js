const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/foods_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
