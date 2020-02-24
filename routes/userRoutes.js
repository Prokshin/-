const express = require("express");
const userConroller = require("./../controllers/userController");
const authController = require("./../controllers/authController");

const router = express.Router();
router.post("/login", authController.login);

router
  .route("/")
  .get(userConroller.getAllTeam)
  .post(userConroller.createMember);

router
  .route("/:id")
  .get(userConroller.getUser)
  .patch(userConroller.updateMember);

module.exports = router;
