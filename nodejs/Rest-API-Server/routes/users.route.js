import express from "express";
import {
  addNewUser,
  getUsersList,
  homePage,
  updateUser,
} from "../controller/users.controller.js";
const UserRoute = express.Router();

UserRoute.get("/", homePage);
UserRoute.get("/list", getUsersList);
UserRoute.post("/add", addNewUser);
UserRoute.put("/update/:id", updateUser);

export default UserRoute;
