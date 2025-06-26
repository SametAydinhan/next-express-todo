"use client";
import { useEffect, useState } from "react";
import { getTodos, updateTodo } from "@/lib/api";
import TodoForm from "./components/TodoForm";
import Link from "next/link";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };
  const handleToggle = async (id: string, completed: boolean) => {
    await updateTodo(id, { completed: !completed });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='p-6 max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <TodoForm onAdd={fetchTodos} />
      <ul className='space-y-2'>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className='border p-2 rounded-md flex justify-between items-center'
          >
            <Link
              href={`/todo/${todo.id}`}
              className='block transition hover:scale-110'
            >
              <span
                className={todo.completed ? "line-through text-gray-400" : ""}
              >
                {todo.title}
              </span>
            </Link>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleToggle(todo.id, todo.completed)}
              className='w-4 h-4'
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
