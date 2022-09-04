const { Blog } = require('../models');

const blogData = [
  {
title:'Why MVC is so important',
Content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the model layer for data,the view layer for design, and the controller layer for application logic.',
blog_dt: '03/09/2022',
User_id: 1,
 },
 {
  title:'Authenticaton vs. Authorization',
  Content: 'There is a difference between austhentication and authorization. Authentication means confirming your own identity,where as authorization means being allowed to access the system',
  blog_dt: '03/09/2022' ,
  User_id: 2,
},
];


const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
