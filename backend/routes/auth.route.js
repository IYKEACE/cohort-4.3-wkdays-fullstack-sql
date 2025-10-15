import express from "express";
import {  forgotPassword, register } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgetPassword", forgotPassword);

export default router;
 