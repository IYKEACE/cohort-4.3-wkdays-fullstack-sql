import express from "express";
import {
  forgotPassword,
  register,
  resetPassword,
} from "../controllers/auth.controller.js";
import {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controller.js";
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
