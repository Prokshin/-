const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");

const viewRouter = require("./routes/viewRoutes");
const projectRouter = require("./routes/projectsRoutes");

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "./views/layouts",
    defaultLayout: "layout",
    extname: "hbs"
  })
);

app.set("view engine", "hbs");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use("/", viewRouter);
app.use("api/projects", projectRouter);

app.listen(9000, function() {
  console.log("App work at 9000!");
});
