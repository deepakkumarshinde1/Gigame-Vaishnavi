import express from "express";
import dotenv from "dotenv";
import UserRoute from "./routes/users.route.js";
dotenv.config();
const app = express();

app.use("/api/users", UserRoute);
// app.use("/admin",)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
