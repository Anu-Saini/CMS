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
            model:'Blog',
            key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      reference: {
            model:'User',
            key: 'id',
      },
    },
date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
},
comment: {
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
module.exports = Comments;
