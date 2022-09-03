//Index routes for API end points
const router = require('express').router();

const apiRoutes = require('./api');
const homeRoutes = require ('/homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;