const path = require("path");
const express = require("express");
const routes = require("routes");
const sequelize = require("sequelize");

const app = express();
const PORT = process.env.PORT || 3001;

const exphbs = require("express-handlebars");
// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

//inform express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening at localhost:", PORT));
});
