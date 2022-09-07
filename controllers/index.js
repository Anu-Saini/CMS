//Index routes for API end points
const router = require('express').Router();
const homeRoutes = require ('./homeRoutes');
const userRoutes = require ('./usersRoute');
const authRoutes = require ('./authRoutes');
const blogRoutes = require ('./blogRoutes');
const dashRoutes = require ('./dashboardRoutes');


router.use('/home', homeRoutes);
router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/dashboard', dashRoutes);
router.use('/', authRoutes);
//router.use('/', homeRoutes);
module.exports = router;