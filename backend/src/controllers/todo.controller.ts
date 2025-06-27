import { Request, Response } from "express";
import { Todo } from "../models/todo.model";

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  res.json(todo);
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const newTodo = await Todo.create({ title });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Create Todo Error:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  await todo.save();
  res.json(todo);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) return res.status(404).json({ message: "todo not found" });

  await todo.deleteOne();
  res.status(204).send();
};
