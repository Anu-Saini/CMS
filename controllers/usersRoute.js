//const homeRoutes = require ('/userRoutes');
//Index routes for API end points
const router = require('express').Router();
const User = require('../models/user')

const bcrypt = require("bcrypt");


router.get('/login', async (req, res) => {
           res.render('login')
});

router.post('/login', async (req, res) => {
            console.log(req.body);
            try {
              const userData = await User.findOne({ where: { email: req.body.email } });
          console.log(userData)
              if (!userData) {
                res
                  .status(400)
                  .json({ message: 'Incorrect email or password, please try again' });
                return;
              }
          
              console.log(req.body.password);
              console.log(userData.password);
              //const validPassword =  bcrypt.compareSync(req.body.password, userData.password);
              const validPassword = req.body.password === userData.password;
              console.log(validPassword);
              if (!validPassword) {
                res
                  .status(400)
                  .json({ message: 'Incorrect email or password, please try again' });
                return;
              }
          
              req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
                
                res.json({ user: userData, message: 'You are now logged in!' });
              });
          
            } catch (err) {
                        console.log(err);
              res.status(400).json(err);
            }
          });







module.exports = router;