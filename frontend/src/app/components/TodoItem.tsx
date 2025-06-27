import { deleteTodo, updateTodo } from "@/lib/api";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import toast from "react-hot-toast";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type Props = {
  todo: Todo;
  onChange: () => void;
};

const TodoItem = ({ todo, onChange }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = async () => {
    await updateTodo(todo.id, { completed: !todo.completed });
    onChange();
  };

  const handleDelete = async () => {
    setShowModal(true);
  };

  const confirmDelete = async () => {
    await deleteTodo(todo.id);
    setShowModal(false);
    onChange();
    toast.success("Todo başarıyla silindi!");
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  const handleUpdate = async () => {
    if (!editValue.trim()) return;
    await updateTodo(todo.id, { title: editValue });
    setIsEditing(false);
    onChange();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };

  return (
    <li className='flex items-center gap-2 border p-2 rounded-md px-3 py-2 border-gray-400/30 focus:outline-none'>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={handleToggle}
        className='w-5 h-5'
      />
      {isEditing ? (
        <input
          type='text'
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className='border rounded-md px-3 py-2 flex-1 border-gray-400/30 focus:outline-none'
        />
      ) : (
        <span
          className={`flex-1 transition-all hover:rotate-2 px-3 py-2 ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          <Link href={`/todo/${todo.id}`} className='flex'>
            {todo.title}
          </Link>
        </span>
      )}
      <button
        onClick={() => {
          setIsEditing(!isEditing);
        }}
        title='Düzenle'
      >
        <SquarePen className='w-5 h-5 text-blue-400 hover:opacity-100 opacity-80 cursor-pointer hover:scale-110' />
      </button>
      <button onClick={handleDelete} title='Sil'>
        <Trash2 className='w-5 h-5 text-red-600 hover:opacity-100 opacity-80 cursor-pointer hover:scale-110' />
      </button>
      <ConfirmModal
        open={showModal}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        message='Silmek istediğine emin misin?'
      />
    </li>
  );
};

export default TodoItem;
