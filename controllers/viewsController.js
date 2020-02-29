const Project = require("../models/projectModel");
const Team = require("../models/teamModel");
const News = require("../models/newsModel");
const Vac = require("../models/vacancyModel");
const date = require("date-and-time");
const User = require("../models/userModel");

exports.getHome = (req, res) => {
  res.status(200).render("home.hbs");
};

exports.getAllProjects = async (req, res, next) => {
  const projects = await Project.find().sort({ _id: -1 });

  res.status(200).render("project.hbs", {
    projects
  });
};

exports.getProject = async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  res.status(200).render("./project-page.hbs", {
    title: project.title,
    description: project.description,
    text: project.text
  });
};

exports.getTeam = async (req, res, next) => {
  const team = await User.find();
  res.render("team.hbs", {
    team
  });
};

exports.getMember = async (req, res) => {
  const member = await User.findById(req.params.id);
  res.render("team-page.hbs", {
    name: member.name,
    family: member.family,
    position: member.position,
    description: member.description
  });
};

exports.getAllNews = async (req, res, next) => {
  const news = await News.find().sort({ createdAt: -1 });

  let i = 0;
  news.forEach(el => {
    news[i].date = date.format(el.createdAt, "DD/MM/YYYY HH:mm");
    i++;
  });

  res.render("news.hbs", {
    news
  });
};

exports.getContact = (req, res, next) => {
  res.render("contact.hbs");
};

exports.getAchievments = (req, res, next) => {
  res.render("achievments.hbs");
};

exports.getVacancy = (req, res, next) => {
  res.render("vacancy.hbs");
};

exports.postVacancy = (req, res) => {
  res.send("ваше резюме отправлено");
};

exports.getLogin = (req, res) => {
  res.render("auth.hbs");
};
exports.getAdmin = (req, res) => {
  res.render("admin.hbs");
};
exports.getAdminProject = async (req, res) => {
  const projects = await Project.find();
  console.log();
  res.render("admin-project.hbs", {
    projects
  });
};
exports.getAdminUser = (req, res) => {
  res.render("admin-user-create.hbs");
};
exports.getAdminNews = (req, res) => {
  res.render("admin-news-create.hbs");
};
exports.getAdminVacancy = async (req, res) => {
  const vac = await Vac.find();
  res.render("admin-vacancy.hbs", {
    vac
  });
};
