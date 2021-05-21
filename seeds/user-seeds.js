const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
  {
    username: '',
    password: ''
  }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers; 
