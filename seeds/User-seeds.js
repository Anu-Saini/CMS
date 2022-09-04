const { User } = require('../models');

const userData = [
  {
    name: 'Anuraag Saini',
    email: 'anu@yahoo.com',
    password:'password',
  },
  {
 name: 'rahat saini',
 email: 'saini@yahoo.co.in',
 password:'password1234',
 },
  {
    name: 'jigisha saini',
    email: 'jigushi@yahoo.co.in',
    password:'pass@word0000',
    },
  ];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;