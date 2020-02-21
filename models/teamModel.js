const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  family: String,
  position: String,
  description: String
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
