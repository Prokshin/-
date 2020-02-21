exports.getHome = (req, res) => {
  res.status(200).render("home.hbs");
};

exports.getAllProjects = (req, res, next) => {
  res.status(200).render("project.hbs", {
    projects: ["Проект 1", "Проект 2", "Проект 3"]
  });
};

exports.getProject = (req, res, next) => {
  res.status(200).render("./project-page.hbs", {
    name: `Проект номер ${req.params.id}`,
    description: `Крутое описание проекта номер ${req.params.id}`
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
