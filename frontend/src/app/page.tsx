"use client";
import { useEffect, useState } from "react";
import { getTodos } from "@/lib/api";
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

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='p-6 max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
      <TodoForm onAdd={fetchTodos} />
      <ul className='space-y-2'>
        {todos.map((todo) => (
          <li key={todo.id} className='border p-2 rounded-md'>
            <Link href={`/todo/${todo.id}`} className='block'>
              {todo.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
