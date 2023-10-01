import { Router } from "express";

import {
  getFlutterwavePublicKey,
  getPaymentIntent,
} from "../controllers/flutterwaveControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/flutterwave/:gateway").get(getFlutterwavePublicKey);
router.route("/flutterwave-intent").post(protect, getPaymentIntent);

export default router;
