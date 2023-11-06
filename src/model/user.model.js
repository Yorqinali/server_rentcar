import { Model, DataTypes } from "sequelize";
import { newSequelize } from "../config/index.js";

export class UserModel extends Model {}

UserModel.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      minlength: 5,
      maxlength: 255,
    },
    password: {
      type: DataTypes.STRING,
      minlength: 4,
      maxlength: 1024,
    },
  },
  {
    tableName: "users",
    updatedAt: true,
    createdAt: true,
    deletedAt: true,
    timestamps: true,
    sequelize: newSequelize,
    paranoid: true,
    underscored: true,
  }
);
