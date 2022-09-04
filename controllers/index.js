//Index routes for API end points
const router = require('express').Router();
const homeRoutes = require ('./homeRoutes');
const userRoutes = require ('./usersRoute');
const authRoutes = require ('./authRoutes');


router.use('/home', homeRoutes);
router.use('/user', userRoutes);
router.use('/', authRoutes);
//router.use('/', homeRoutes);
module.exports = router;