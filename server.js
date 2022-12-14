
const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
// const seedAll = require('./seeds/index');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connections');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;



// Set up Handlebars.js engine with custom helpers
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

// set up express-session
const sess = {
            secret: 'Super secret secret',
            cookie: {
              maxAge: 300000,
              httpOnly: true,
              secure: false,
              sameSite: 'strict',
            },
            resave: false,
            saveUninitialized: true,
            store: new SequelizeStore({
              db: sequelize
            })
          };

 app.use(session(sess));

//inform express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public/')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
// seedAll();
  app.listen(PORT, () => console.log(`Now listening at localhost:, ${ PORT }`));
});
