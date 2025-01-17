import express from "express";
import { loginAdmin, registerAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();
adminRouter.post("/registerAdmin", registerAdmin);
adminRouter.post("/loginAdmin", loginAdmin);

export default adminRouter;
