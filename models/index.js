// CREATE RELATIONSHIPS BETWEEN MODELS AND EXPORT MODULES
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

//relation ship between blog and user
User.hasMany(Blog)
Blog.belongsTo(User);

//relation ship between comment and blog
Blog.hasMany(Comment);
Comment.belongsTo(Blog)

User.hasMany(Comment);
Comment.belongsTo(User)


module.exports = { 
            User, 
            Blog,
            Comment,
 };
