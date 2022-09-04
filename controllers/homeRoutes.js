const router = require('express').Router();
const { Blog, Comment, User } = require ('../models');

//the endpoint for getting all blogs 
router.get('/', async (req, res) => {
            // Blog.findAll().then(data =>{
            //             console.log(data);
            //             //const blogs = data.map((item) => item.get({ plain: true }));
            //             //console.log(blogs);
            //             res.send(data);
            //             //res.render('home', {items: blogs});
            // });
            const data = await Blog.findAll({ include: [{ model: User  }]});
            const blogs = data.map((item) => item.get({ plain: true }));
            res.render('home', {items: blogs});
});


//the endpoint for getting a particular blogs
router.get('/:id', async(req, res) =>{
            const data = await Blog.findByPk(req.params.id,{
                        include: [{model:Comment, model:User}],
            });
            res.status(200).json(data)
});

module.exports = router
