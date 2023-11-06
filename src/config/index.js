import sequelize from "sequelize";

const newSequelize = new sequelize(
  "postgres://postgres:931671609yy@localhost:4040/rentcar",
  { logging: false }
);

export { newSequelize };
