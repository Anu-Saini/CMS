//comments model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");


class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
      blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
            model:'blog',
            key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
            model:'user',
            key: 'id',
      },
    },
comment_dt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
},
comments: {
          type: DataTypes.TEXT,
          allowNull: false,
},
},
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "comments",
  }
);
model.exports = Comments;