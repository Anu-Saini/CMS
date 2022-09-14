// CREATE RELATIONSHIPS BETWEEN MODELS AND EXPORT MODULES
const Blogger = require("./Blogger");
const Blog = require("./Blog");
const Comment = require("./Comment");

//relation ship between blog and user
Blog.belongsTo(Blogger, {forgienKey: 'user_id'});
Blogger.hasMany(Blog, {forgienKey: 'user_id'})


//relation ship between comment and blog
Blog.hasMany(Comment, {forgienKey: 'blog_id'});
Comment.belongsTo(Blog, {forgienKey: 'blog_id'})

Blogger.hasMany(Comment, {forgienKey: 'user_id'});
Comment.belongsTo(Blogger, {forgienKey: 'user_id'})


module.exports = { 
 Blogger, 
            Blog,
            Comment,
 };
