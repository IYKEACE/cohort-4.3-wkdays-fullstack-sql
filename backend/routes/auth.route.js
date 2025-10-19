import express from "express";
import {
  forgotPassword,
  register,
  resetPassword,
  getSingleUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgetPassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.get("/user/:id", getSingleUser);
router.get("/users", getAllUsers);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
