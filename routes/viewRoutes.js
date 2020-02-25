const express = require("express");
const viewController = require("../controllers/viewsController");
const authContoller = require("../controllers/authController");
const projectController = require("../controllers/projectController");
const userContoller = require("../controllers/userController");
const newsConroller = require("../controllers/newsController");
const vacancyController = require("../controllers/vacancyController");

const multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/vacancy");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype ===
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

const router = express.Router();
router.get("/", viewController.getHome);
router.get("/project", viewController.getAllProjects);
router.get("/project/:id", viewController.getProject);
router.get("/team", viewController.getTeam);
router.get("/team/:id", viewController.getMember);
router.get("/news", viewController.getAllNews);
router.get("/contact", viewController.getContact);
router.get("/achievments", viewController.getAchievments);
router.get("/vacancy", viewController.getVacancy);
router.post(
  "/vacancy",
  upload.single("filedata"),
  vacancyController.postVacancy
);
router.get("/login", viewController.getLogin);
router.post("/login", authContoller.login);
router.get("/admin", authContoller.isLogin, viewController.getAdmin);
router.get(
  "/admin/project",
  authContoller.isLogin,
  viewController.getAdminProject
);
router.post(
  "/admin/project",
  authContoller.isLogin,
  projectController.createProject
);
router.get("/admin/user", authContoller.isLogin, viewController.getAdminUser);
router.post("/admin/user", authContoller.isLogin, userContoller.createMember);
router.get("/admin/news", authContoller.isLogin, viewController.getAdminNews);
router.post("/admin/news", authContoller.isLogin, newsConroller.createNews);
module.exports = router;
