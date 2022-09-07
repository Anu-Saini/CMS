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
  // res.status(200).json(data)
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
 console.log(req.session.user_id)
 try{  Blog.create({
    title: req.body.title,
    content: req.body.content,
    blog_dt: new Date(),
    user_id: req.session.user_id,
  }).then(() =>{
     res.status(201);
  })
 }
 catch(e)
 {
  console.log(e);
 }
});

module.exports = router;
