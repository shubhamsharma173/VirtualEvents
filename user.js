const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  img: String,
});

module.exports = mongoose.model("User", user);
