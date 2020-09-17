const router = require('express').Router();
const somethingRoutes = require('./something-routes');

// add prefix of `/somethings` to routes created in `something-routes.js`
router.use('/somethings', somethingRoutes);

module.exports = router;