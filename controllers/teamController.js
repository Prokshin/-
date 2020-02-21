const Team = require("../models/teamModel");

exports.getAllTeam = async (req, res) => {
  try {
    const team = await Team.find();
    res.status(200).json({
      status: "success",
      results: team.length,
      data: {
        team
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

exports.getMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        member
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.createMember = async (req, res) => {
  try {
    const newMember = await Team.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: "success",
      data: {
        member: newMember
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(201).json({
      status: "success",
      data: {
        member
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
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
