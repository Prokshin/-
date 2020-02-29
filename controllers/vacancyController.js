const Vacancy = require("../models/vacancyModel");
const fs = require("fs");
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
      //res.send("alert.html");
      //res.redirect("alert.html");
      res.status(200).render("alert-vacancy.hbs");
    }
  } catch (error) {
    console.log("gg");
  }
};

exports.deleteVacancy = async (req, res) => {
  try {
    const a = await Vacancy.findByIdAndDelete(req.params.id);
    console.log(a.url);
    res.status(204).json({
      status: "success",
      data: null
    });

    fs.unlink(`${__dirname}/../${a.url}`, err => {
      if (err) console.log(err);
      // если возникла ошибка
      else console.log("file was deleted");
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};
