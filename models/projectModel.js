const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  text: String,
  number: Number
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
