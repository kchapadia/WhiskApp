import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
  verifyUser
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);
router.route("/verify/:token").put(verifyUser);
export default router;
