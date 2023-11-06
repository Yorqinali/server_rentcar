import { Router } from "express";
import { login, signup, usersGet } from "../controller/user.controller.js";

const Users = Router();

Users.get("/users", usersGet);
Users.post("/users/signup", signup);
Users.post("/users/login", login);


export default Users;
