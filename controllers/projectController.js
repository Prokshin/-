const Project = require("../models/projectModel");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      status: "success",
      results: projects.length,
      data: {
        projects
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

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        project
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        project: newProject
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(201).json({
      status: "success",
      data: {
        project
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
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
