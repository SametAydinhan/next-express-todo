import { Request, Response } from "express";
import { todos, Todo } from "../models/todo.model";
import { v4 as uuidv4 } from "uuid";

export const getTodos = (req: Request, res: Response) => {
  res.json(todos);
};

export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body;
  const newTodo: Todo = { id: uuidv4(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
};

export const deleteTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  todos.splice(index, 1);
  res.status(204).send();
};
