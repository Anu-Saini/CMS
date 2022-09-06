const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

router.get("/", async (req, res) => {
  const userId = req.session.user_id;
  console.log(userId);
  const data = await Blog.findAll({ where: { user_id: userId } });

  const blogs = data.map((item) => item.get({ plain: true }));
  console.log(blogs);
  res.render("dashboard", { items: blogs });
});




module.exports = router;