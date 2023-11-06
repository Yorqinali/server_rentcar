import express from "express";
import cors from "cors";
import "dotenv/config";
import { newSequelize } from "./config/index.js";
import Users from "./router/users.routes.js";
import Car from "./router/cars.routes.js";


async function bootstrap() {
  try {
    const app = express();
    app.use(express.json());
    app.use(cors());
    // app.use(express.urlencoded());
    // app.use(express.static(path.join(process.cwd(), "uploads")));
    try {
      await newSequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
    app.use(Users);
    app.use(Car);
    app.listen(process.env["PORT"], process.env["HOST"], () => {
      console.log(`server is running on port: ${process.env["PORT"]}`);
    });
  } catch (error) {
    console.log(error.message);
  }
}
bootstrap(); 
