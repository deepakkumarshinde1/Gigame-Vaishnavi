import express from "express";
import { noFile, upload } from "./middleware/files.middleware.js";
import {
  addNewUser,
  getUsersList,
  homePage,
  updateUser,
  updateUserProfilePic,
} from "../controller/users.controller.js";

const UserRoute = express.Router();

UserRoute.get("/", homePage);
UserRoute.get("/list", getUsersList);
UserRoute.post("/add", noFile.none(), addNewUser);
UserRoute.put("/update/:id", updateUser);
UserRoute.put(
  "/update-profile-pic/:id",
  upload.single("user_profile"),
  updateUserProfilePic
);

export default UserRoute;
