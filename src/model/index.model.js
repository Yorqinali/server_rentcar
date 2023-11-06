import { CarsModel } from "./cars.model.js";
import { UserModel } from "./user.model.js";

UserModel.belongsToMany(CarsModel, {
  through: CarsModel,
  foreignKey: "user_id",
});

CarsModel.belongsToMany(UserModel, {
  through: UserModel,
  foreignKey: "cars_id",
});

async function func() {
  await UserModel.sync({ alter: true });
  await CarsModel.sync({ alter: true });
 
}
func();

export { UserModel as User, CarsModel as Cars };
