const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

// Pass true to env() to make it use the current environment stage.

require('custom-env').env(true)

console.log(process.env.APP_NAME)
console.log(process.env.USERNAME)
console.log(process.env.PASSKEY)
NODE_ENV=staging 

module.exports = router; 
