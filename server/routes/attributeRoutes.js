import { Router } from "express";
import {
  attributeCreate,
  attributeList,
  attributeById,
  attributeUpdate,
  attributeDelete,
} from "../controllers/attributeControllers.js";
import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/attribute")
  .post(protect, adminCheck, attributeCreate)
  .get(attributeList);
router
  .route("/attribute/:id")
  .get(attributeById)
  .put(protect, adminCheck, attributeUpdate)
  .delete(protect, adminCheck, attributeDelete);

export default router;
