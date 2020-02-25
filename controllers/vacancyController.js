const Vacancy = require("../models/vacancyModel");

exports.postVacancy = async (req, res) => {
  try {
    let filedata = req.file;
    console.log(filedata);
    console.log(req.body);
    if (!filedata) res.send("Ошибка при загрузке файла");
    else {
      await Vacancy.create({
        url: filedata.path,
        name: req.body.name,
        email: req.body.email,
        position: req.body.position
      });
      res.send("<h1>Ваша заявка успешно отправлена</h1>");
    }
  } catch (error) {
    console.log("gg");
  }
};
