// CREATE RELATIONSHIPS BETWEEN MODELS AND EXPORT MODULES
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

//relation ship between blog and user
User.hasMany(Blog, { foreignKey: "user_id" });
Blog.belongsTo(User, { foreignKey: "user_id" });

//relation ship between comment and blog
Blog.hasMany(Comment, { foreignKey: "blog_id" });
Comment.belongsTo(Blog, { foreignKey: "blog_id" })


module.exports = { 
            User, 
            Blog,
            Comment,
 };
