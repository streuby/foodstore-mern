import { Router } from "express";

import {
  getPaystackPublicKey,
  getPaymentIntent,
} from "../controllers/PaystackControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/paystack/:gateway").get(getPaystackPublicKey);
router.route("/paystack-intent").post(protect, getPaymentIntent);

export default router;
