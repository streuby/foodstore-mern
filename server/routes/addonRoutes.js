import { Router } from "express";
import {
  addonCreate,
  addonList,
  addonBySlug,
  addonUpdate,
  addonDelete,
} from "../controllers/addonControllers.js";
import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = Router();

router.route("/addon").post(protect, adminCheck, addonCreate).get(addonList);
router
  .route("/addon/:slug")
  .get(addonBySlug)
  .put(protect, adminCheck, addonUpdate)
  .delete(protect, adminCheck, addonDelete);

export default router;
