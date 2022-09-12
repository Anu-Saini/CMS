const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const withAuth = require('../utils/auth');

router.get("/", withAuth, async (req, res) => {
  try {
   const userId = req.session.user_id;
  
   console.log(userId);
  if (!userId) {
    res.render('login')
    return
  } 
  const data = await Blog.findAll({ where: { user_id: userId } });

  const blogs = data.map((item) => item.get({ plain: true }));
  console.log(blogs);
  res.render("dashboard", { items: blogs , logged_in: req.session.logged_in}); 
  } catch(err) {
res.status(500).json(err.message)
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


//   const blogs = data.map((item) => item.get({ plain: true }));
//   console.log(blogs);
//   res.render("dashboard", { items: blogs });
// });




module.exports = router;