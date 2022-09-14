const router = require("express").Router();
const { Blog, Comment, Blogger } = require("../models");
const withAuth = require('../utils/auth');

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

//the endpoint for getting all blogs
router.get("/:id" , async (req, res) => {
  if(!res.session.logged_in){
    res.redirect('/login')
   } else{    
   try {
    const data = await Blog.findByPk(req.params.id, {
      include: [
        {
           model: Blogger
        }
      ], 
    });

  const blogs = item.get({ plain: true });
   res.render("home", { item: blogs, 
    logged_in: req.session.logged_in });
  } catch (err) {
  console.log(err);
  res.status(400).json(err);
      }
  }
});

module.exports = router;
