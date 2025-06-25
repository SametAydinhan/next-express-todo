import { Request, Response } from "express";
import { todos, Todo } from "../models/todo.model"
import { v4 as uuidv4 } from "uuid";

export const getTodos = (req: Request, res: Response) => {
    res.json(todos);
}

export const createTodo = (req: Request, res: Response) => {
    const {title} = req.body;
    const newTodo: Todo = {id: uuidv4(), title, completed: false};
    todos.push(newTodo);
    res.status(201).json(newTodo);
}