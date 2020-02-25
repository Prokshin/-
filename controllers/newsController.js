const News = require("../models/newsModel");

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json({
      status: "success",
      results: news.length,
      data: {
        projects: news
      }
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.getNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        project: news
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.createNews = async (req, res) => {
  try {
    const news = await News.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        project: news
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateNews = async (req, res) => {
  try {
    const news = await News.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(201).json({
      status: "success",
      data: {
        project: news
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
