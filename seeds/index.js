// JS TO SEED THE DATABASE

const sequelize = require('../config/connections')
const seedBlog = require('./Blog-seeds');
const seedUser = require('./User-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedBlog();

  

  process.exit(0);
};

seedAll();
