import { DataTypes, Model } from "sequelize";
import { newSequelize } from "../config/index.js";

export class CarsModel extends Model {}

CarsModel.init(
  {
    cars_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    car_name: {
      type: DataTypes.STRING,
    },
    rent_price: {
      type: DataTypes.INTEGER,
    },
    fuel: {
      type: DataTypes.STRING,
    },
    motor_size: {
      type: DataTypes.INTEGER,
    },
    color: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
   phone: {
    type: DataTypes.STRING,
   },
   
  },
  {
    tableName: "cars",
    timestamps: true,
    sequelize: newSequelize,
    paranoid: true,
    deletedAt: true,
    underscored: true,
  }
);
