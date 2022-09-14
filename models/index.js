// CREATE RELATIONSHIPS BETWEEN MODELS AND EXPORT MODULES
const Blogger = require("./Blogger");
const Blog = require("./Blog");
const Comment = require("./Comment");

//relation ship between blog and user
Blog.belongsTo(Blogger, {forgienKey: 'Blogger_id'});
Blogger.hasMany(Blog, {forgienKey: 'Blogger_id'})


//relation ship between comment and blog
Blog.hasMany(Comment, {forgienKey: 'blog_id'});
Comment.belongsTo(Blog, {forgienKey: 'blog_id'})

Blogger.hasMany(Comment, {forgienKey: 'Blogger_id'});
Comment.belongsTo(Blogger, {forgienKey: 'Blogger_id'})


module.exports = { 
            Blogger, 
            Blog,
            Comment,
 };
