import { Router } from "express";
import {
  userList,
  saveShippingAddress,
  userDetails,
  addToWishlist,
  removeFromWishlist,
  wishlistData,
} from "../controllers/userControllers.js";
import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/users")
  .get(protect, adminCheck, userList)
  .post(protect, saveShippingAddress);
router.route("/admin/usersDetails/:id").get(protect, adminCheck, userDetails);

router.route("/wishlist").get(protect, wishlistData);

router
  .route("/wishlist/:id")
  .post(protect, addToWishlist)
  .put(protect, removeFromWishlist);

export default router;
