const express = require("express");
const teamController = require("./../controllers/teamController");

const router = express.Router();

router
  .route("/")
  .get(teamController.getAllTeam)
  .post(teamController.createMember);

router
  .route("/:id")
  .get(teamController.getMember)
  .patch(teamController.updateMember);

module.exports = router;
