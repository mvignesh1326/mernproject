import express from "express";
import { registerAdmin, loginAdmin } from "../controllers/admincontrollers.js";
const adminRouter = express.Router();

adminRouter.post("/register", registerAdmin);
adminRouter.post("/login", loginAdmin);

export default adminRouter;