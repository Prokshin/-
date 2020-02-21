const Project = require("../models/projectModel");

exports.getHome = (req, res) => {
  res.status(200).render("home.hbs");
};

exports.getAllProjects = async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).render("project.hbs", {
    projects
  });
};

exports.getProject = async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  console.log(project);
  res.status(200).render("./project-page.hbs", {
    title: project.title,
    description: project.description,
    text: project.text
  });
};

exports.getTeam = (req, res, next) => {
  res.render("team.hbs", {
    team: ["Участник 1", "Участник 2"]
  });
};

exports.getNews = (req, res, next) => {
  res.render("news.hbs", {
    news: [
      {
        title: "Заголовок 1",
        text:
          "Текст описывющий событие 1, которое является невероятно важным для нас, но вам всё-равно"
      },
      {
        title: "Заголовок 2",
        text:
          "Текст описывющий событие 3, которое является невероятно важным для нас, но вам всё-равно"
      },
      {
        title: "Заголовок 3",
        text:
          "Текст описывющий событие 3, которое является невероятно важным для нас, но вам всё-равно"
      }
    ]
  });
};

exports.getContact = (req, res, next) => {
  res.render("contact.hbs");
};

exports.getAchievments = (req, res, next) => {
  res.render("achievments.hbs");
};
