"use client";
import { createTodo } from "@/lib/api";
import React, { useState } from "react";

type Props = {
  onAdd: () => void;
};

const TodoForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await createTodo(title);
    setTitle("");
    onAdd();
  };
  return (
    <form onSubmit={handleSubmit} className='mb-4 flex gap-2'>
      <input
        type='text'
        placeholder='Add New Todo'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border rounded-md px-3 py-2 flex-1'
      />
      <button type='submit' className='bg-blue-600 text-white px-4 rounded-md'>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
