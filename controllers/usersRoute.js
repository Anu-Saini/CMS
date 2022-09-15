//Index routes for API end point
const router = require("express").Router();
const { Blog, Comment, User } = require("../models");
const bcrypt = require("bcrypt");

router.get("/login", async (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    const data = userData.get({ plain: true });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    //const validPassword =  bcrypt.compareSync(req.body.password, userData.password);
    const validPassword = req.body.password === userData.password;
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      console.log(req.session.user_id);
      req.session.logged_in = true;
      res.status(200).json({ user: data, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
