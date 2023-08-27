import { Router } from "express";
import {
  currencyCreate,
  currencyList,
  currencyById,
  currencyUpdate,
  currencyDelete,
} from "../controllers/currencyControllers.js";
import { protect, adminCheck } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/currency")
  .post(protect, adminCheck, currencyCreate)
  .get(currencyList);
router
  .route("/currency/:id")
  .get(currencyById)
  .put(protect, adminCheck, currencyUpdate)
  .delete(protect, adminCheck, currencyDelete);

export default router;
