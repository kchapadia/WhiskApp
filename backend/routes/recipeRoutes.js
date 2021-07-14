import express from "express";
import {
  getRecipeById,
  getRecipes,
  CreateRecipe,
  DeleteRecipe,
  UpdateRecipe,
} from "../controllers/recipeController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getRecipes);
router
  .route("/:id")
  .get(getRecipeById)
  .delete(protect, DeleteRecipe)
  .put(protect, UpdateRecipe);
router.route("/create").post(protect, CreateRecipe);

export default router;
