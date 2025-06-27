import { Router } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getTodoById,
} from "../controllers/todo.controller";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/", asyncHandler(getTodos));
router.post("/", asyncHandler(createTodo));
router.put("/:id", asyncHandler(updateTodo));
router.delete("/:id", asyncHandler(deleteTodo));
router.get("/:id", asyncHandler(getTodoById));

export default router;
