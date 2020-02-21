const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.render("project.hbs", {
      projects: ["Проект 1", "Проект 2", "Проект 3"]
    });
  })
  .post((req, res) => {
    res.status(201).json({ status: "success" });
  });

module.exports = router;
