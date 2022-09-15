const { Blog } = require('../models');

const blogData = [
  {
title:'Why MVC is so important',
content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the model layer for data,the view layer for design, and the controller layer for application logic.',
blog_dt: '03/09/2022',
user_id: 1,
 },
 {
  title:'Authenticaton vs. Authorization',
  content: 'There is a difference between austhentication and authorization. Authentication means confirming your own identity,where as authorization means being allowed to access the system',
  blog_dt: '03/09/2022' ,
  user_id: 2,
}, {
  title:'test1',
  content: 'test1test1test1test1test1test1test1test1test1test1test1test1test1',
  blog_dt: '04/09/2022' ,
  user_id: 2,
},
{
  title:'test 000022220000222',
  content: 'test 000022220000222test 000022220000222test 000022220000222test 000022220000222test 000022220000222test 000022220000222',
  blog_dt: '05/09/2022' ,
 user_id: 3,
},

];


const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
