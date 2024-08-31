import express from "express";
import {
  deleteGoals,
  getGoals,
  postGoals,
  updateGoals,
} from "../controllers/goalController.js";

const router = express.Router();

router
  .get("/", getGoals)
  .post("/", postGoals)
  .put("/:id", updateGoals)
  .delete("/:id", deleteGoals);

// router.put("/:id", updateGoals).delete("/:id", deleteGoals);

// router.get("/", getGoals);

// router.post("/", postGoals);

// router.put("/:id", updateGoals);

// router.delete("/:id", deleteGoals);

export default router;
