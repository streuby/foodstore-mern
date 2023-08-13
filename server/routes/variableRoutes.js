import { Router } from "express";
import {
  variableCreate,
  variableList,
  variableDelete,
  variableById,
  variableUpdate,
} from "../controllers/variableControllers.js";

import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/variable")
  .post(protect, adminCheck, variableCreate)
  .get(variableList);
router
  .route("/variable/:id")
  .delete(protect, adminCheck, variableDelete)
  .get(variableById)
  .put(protect, adminCheck, variableUpdate);

export default router;
