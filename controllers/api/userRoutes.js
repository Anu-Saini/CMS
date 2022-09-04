//Index routes for API end points
const router = require('express').Router();


//const homeRoutes = require ('/userRoutes');


router.get('/', async (req, res) => {
            Blog.findAll().then(data =>{
                        res.status(200).json(data);
            });
});

module.exports = router;