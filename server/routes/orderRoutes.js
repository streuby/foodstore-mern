import { Router } from "express";
import {
  orderCreate,
  getOrderById,
  userOrderList,
  adminOrderList,
  updateOrderStatus,
  updatePaymentStatus,
} from "../controllers/orderControllers.js";
import { protect, adminCheck } from "../middleware/authMiddleware.js";
const router = Router();

router.route("/order").post(protect, orderCreate).get(protect, userOrderList);
router.route("/order/:id").get(protect, getOrderById);
router.route("/admin/orderlist").get(protect, adminCheck, adminOrderList);
router
  .route("/admin/orderStatus/:id")
  .put(protect, adminCheck, updateOrderStatus);

router
  .route("/admin/paymentStatus/:id")
  .put(protect, adminCheck, updatePaymentStatus);

export default router;
