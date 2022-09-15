// CREATE RELATIONSHIPS BETWEEN MODELS AND EXPORT MODULES
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

//relation ship between blog and user
Blog.belongsTo(User, { forgienKey: "user_id" });
User.hasMany(Blog, { forgienKey: "user_id" });

//relation ship between comment and blog
Blog.hasMany(Comment, { forgienKey: "blog_id" });
Comment.belongsTo(Blog, { forgienKey: "blog_id" });

User.hasMany(Comment, { forgienKey: "user_id" });
Comment.belongsTo(User, { forgienKey: "user_id" });

module.exports = {
  User,
  Blog,
  Comment,
};
