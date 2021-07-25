import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
  verifyUser,
  forgotUserPassword,
  sendForgotEmail
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
router.route("/verify/:token").put(verifyUser);
router.route("/forgotPassword/:token").put(forgotUserPassword);
router.route("/sendForgotEmail/").post(sendForgotEmail);
export default router;
