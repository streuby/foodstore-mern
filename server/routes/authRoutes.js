import { Router } from "express";
import {
  createOrUpdateUser,
  currentUser,
} from "../controllers/authControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/auth/create-or-update-user").post(protect, createOrUpdateUser);
router.route("/auth/current-user").post(protect, currentUser);

export default router;
