const mongoose = require("mongoose");

const vacncySchema = new mongoose.Schema({
  url: String,
  name: String,
  email: String,
  position: String
});

const Vacancy = mongoose.model("vacancy", vacncySchema);

module.exports = Vacancy;
