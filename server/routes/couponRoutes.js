import { Router } from "express";
import {
  couponCreate,
  couponList,
  couponDelete,
} from "../controllers/couponControllers.js";

import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/coupon")
  .post(protect, adminCheck, couponCreate)
  .get(protect, couponList);
router.route("/coupon/:id").delete(protect, adminCheck, couponDelete);

export default router;
