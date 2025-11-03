import express from "express";
import { getUsersList, homePage } from "../controller/users.controller.js";
const UserRoute = express.Router();

UserRoute.get("/", homePage);
UserRoute.get("/list", getUsersList);

export default UserRoute;
