const Sequelize = require('sequelize');
require('custom-env').env()
require ('custom-env').env('staging')

require('dotenv').config();





 



let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL); 
  
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    
  
     port: 3306 
     
  });
}
console.log(process.env.ENV_VARIABLE)

console.log(process.env.APP_ENV)

console.log(process.env.APP_NAME)

console.log(process.env.DB_HOST)

console.log(process.env.DB_PASS)

module.exports = sequelize; 
