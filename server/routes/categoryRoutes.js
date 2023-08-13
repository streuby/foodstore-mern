import { Router } from "express";
import {
  categoryCreate,
  categoryList,
  categoryBySlug,
  categoryUpdate,
  categoryDelete,
  productsByCategory,
  categoryUploadImage,
  categoryRemoveImage,
} from "../controllers/categoryControllers.js";
import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/category-image-upload")
  .post(protect, adminCheck, categoryUploadImage);
router
  .route("/category-image-remove")
  .post(protect, adminCheck, categoryRemoveImage);

router
  .route("/category")
  .post(protect, adminCheck, categoryCreate)
  .get(categoryList);

router
  .route("/category/:slug")
  .get(categoryBySlug)
  .put(protect, adminCheck, categoryUpdate)
  .delete(protect, adminCheck, categoryDelete);
router.route("/categoryByCategory").post(productsByCategory);

export default router;
