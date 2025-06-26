"use client";
import { useEffect, useState } from "react";
import { getTodos } from "@/lib/api";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchTodos();
  }, [])

  return(
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <ul className="space-y-2">
            {todos.map((todo) => (
              <li key={todo.id} className="border p-2 rounded-md">{todo.title}</li>
            ))}
        </ul>
    </div>
  )

}
