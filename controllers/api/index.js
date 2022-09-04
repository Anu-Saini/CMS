//Index routes for API end points
const router = require('express').Router();


const userRoutes = require ('./aaaauserRoutes');


router.use('/user', userRoutes);

module.exports = router;