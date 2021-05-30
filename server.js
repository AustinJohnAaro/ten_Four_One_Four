const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controller');
require('custom-env').env()
require ('custom-env').env('staging')

const app = express();
JAWSDB_URL:'mysql://hm0tfw0xsfp2w0n9:r5zvvht1n1blep0h@ik1eybdutgxsm0lo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wa0qgae5sdrboh8b'
 
// it is on heroku fuck face! 



var sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'j*h*',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

require('custom-env').env(true)

console.log(process.env.APP_NAME)
console.log(process.env.USERNAME)
console.log(process.env.PASSKEY)
console.log(process.env.NODE_ENV) 
console.log(process.env.NODE_ENV === 'dev') 
console.log(process.env.NODE_ENV.length)
console.log(process.env.NODE_ENV.trim() === 'dev') 
NODE_ENV=staging 

const PORT = process.env.PORT || 3306

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App now listening on port ${PORT}`))
}); 
