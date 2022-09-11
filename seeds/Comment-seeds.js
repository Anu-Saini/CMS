const { Comment } = require("../models");

const commentData = [
  {
    blog_id: 1,
    user_id: 2,
    blog_dt: "03/09/2022",
    comment:
      "MVC plays an important part in controlling the flow of an website as well as laying the foundation of making single page websites.",
  },
  {
    blog_id: 1,
    user_id: 1,
    blog_dt: "04/09/2022",
    comment:
      "MVC plays an crucial . it is being taught in universities adn colleges as integral part in web development.",
  },

  {
    blog_id: 2,
    user_id: 1,
    blog_dt: "04/09/2022",
    comment:
      "Authentication is a crucial part in maintaing the security of any organisation IT infrastructure. Authorization is from the admin , allowing access to organisation resources,",
  },
  {
    blog_id: 2,
    user_id: 3,
    blog_dt: "05/09/2022",
    comment:
      "This test needs to be successful in order to main the flow of information. Repeat. This test needs to be successful in order to main the flow of information. ",
  },
  {
    blog_id: 3,
    user_id: 1,
    blog_dt: "05/09/2022",
    comment: "this test is success. this test is successful now. this test was successful earlier.",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
