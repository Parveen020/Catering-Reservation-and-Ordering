import express from "express";
import {
  getUser,
  updateUser,
  loginUser,
  registerUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();
userRouter.post("/getUser", getUser);
userRouter.put("/updateUser/:email", updateUser);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
