const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
