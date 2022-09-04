const router = require('express').Router();
const { Blog, Comment, User } = require ('../models');

//the endpoint for getting all blogs 
router.get('/', async (req, res) => {
            Blog.findAll().then(data =>{
                        res.status(200).json(data);
            });
});


//the endpoint for getting a particular blogs
router.get('/:id', async(req, res) =>{
            const data = await product.findByPk(req.params.id,{
                        include: [{model:Comment, model:User}],
            });
            res.status(200).json(data)
});

module.exports = router
