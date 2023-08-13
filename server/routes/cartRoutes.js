import { Router } from "express";
import {
  dbCart,
  cartList,
  clearDbCart,
  applyCoupon,
  cancelCoupon,
  deleteUserDbCart,
} from "../controllers/cartControllers.js";

import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/cart")
  .post(protect, dbCart)
  .get(protect, cartList)
  .delete(protect, clearDbCart);
router.route("/cart/coupon").post(protect, applyCoupon);
router.route("/cart/coupon-cancel").post(protect, cancelCoupon);
router.route("/cart/delete-user-cart").delete(protect, deleteUserDbCart);

export default router;
