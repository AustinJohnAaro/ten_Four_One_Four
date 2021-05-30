const Sequelize = require('sequelize');
require('custom-env').env()
require ('custom-env').env('staging')

require('dotenv').config();

var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();
JAWSDB_URL:'mysql://hm0tfw0xsfp2w0n9:r5zvvht1n1blep0h@ik1eybdutgxsm0lo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wa0qgae5sdrboh8b' 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL); 
  JAWSDB_URL: 'mysql://hm0tfw0xsfp2w0n9:r5zvvht1n1blep0h@ik1eybdutgxsm0lo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wa0qgae5sdrboh8b';
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
