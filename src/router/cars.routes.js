import { Router } from "express";
import { carsGet, carscreate, carsdelete } from "../controller/cars.controller.js";
import { uploads } from "../utils/multer.conf.js";


const Car = Router();

Car.get("/cars", carsGet);
Car.post("/cars/create", uploads.single("image"), carscreate);
Car.delete("/cars/delete/:cars_id", carsdelete);

export default Car;
