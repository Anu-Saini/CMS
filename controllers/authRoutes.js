//const homeRoutes = require ('/userRoutes');
//Index routes for API end points
const router = require('express').Router();




router.get('/login', async (req, res) => {
           res.render('login')
});

router.get('/', async (req, res) => {
 res.render('home')
});
module.exports = router;