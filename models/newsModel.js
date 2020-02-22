const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  text: String
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
