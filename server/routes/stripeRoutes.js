import { Router } from "express";
import {
  createPaymentIntent,
  createPaymentIntentById,
} from "../controllers/stripeControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/create-payment-intent/:orderId")
  .post(protect, createPaymentIntentById);

router.route("/create-payment-intent").post(protect, createPaymentIntent);

export default router;
