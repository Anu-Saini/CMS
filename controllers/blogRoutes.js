const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

router.get("/newblog", async (req, res) => {
 console.log("in");
 try {
  const id = req.session.user_id;
  if(id)
      res.render("newblog");
   else
      res.redirect("login")
 } catch (e) {
   console.log(e);
 }
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await Blog.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });
    const blog = data.get({ plain: true });
    console.log(blog);
    res.render(`blog`, { items: blog });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
 });

router.put("/:id", async (req, res) => {
  console.log(req.body.something);
  try {
    await Blog.update(
      {
        content: req.body.something,
      },
      {
        where: { id: req.params.id },
      }
    );
    const data = await Blog.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });
    const blog = data.get({ plain: true });

    res.render(`blog`, { items: blog });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

  res.status(200);
});

router.post("/", async (req, res) => {
  const jane = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    blog_dt: new Date(),
    user_id: req.session.user_id,
  });
  res.status(200).send("ok");
});

router.post("/comment", async (req, res) => {
  console.log(req.body)
  Comment.create({
    blog_id: req.body.blog_id,
    user_id: req.session.user_id,
    blog_dt: new Date(),
    comment: req.body.comment,
  }).then(() =>{
    res.status(200).send("ok");
  })
 });

module.exports = router;
