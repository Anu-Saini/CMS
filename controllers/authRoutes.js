//const homeRoutes = require ('/userRoutes');
//Index routes for API end points
const router = require('express').Router();
const { Blog, Comment, Blogger } = require("../models");
const withAuth = require('../utils/auth');




router.get('/login', async (req, res) => {
           res.render('login')
});


//the endpoint for getting all blogs
router.get("/" , async (req, res) => {
 try {
 const data = await Blog.findAll({
   include: [
     {
        model: Blogger
     }
   ], 
 });

const blogs = data.map((item) =>
item.get({ plain: true })
);
console.log(blogs)

res.render("home", { 
 items: blogs,
 logged_in: req.session.logged_in,
});
} catch (err) {
console.log(err);
res.status(500).json(err);
}
});
module.exports = router;