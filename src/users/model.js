const { DataTypes } = require("sequelize");
const sequalize = require("../db/connection");

const User = sequalize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
  },
  { timestamps: false, indexed: [{ unique: true, fields: ["username"] }] }
);

module.exports = User;