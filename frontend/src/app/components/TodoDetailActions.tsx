"use client";

import { deleteTodo, updateTodo } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
  id: string;
  currentTitle: string;
};

export default function TodoDetailActions({ id, currentTitle }: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(currentTitle);

  const handleDelete = async () => {
    const confirm = window.confirm("Silmek istediğine emin misin?");
    if (!confirm) return;

    await deleteTodo(id);
    router.push("/");
  };

  const handleUpdate = async () => {
    if (!title.trim()) return alert("Başlık boş olamaz");
    await updateTodo(id, { title });
    router.refresh(); // sayfayı yenile
  };

  return (
    <div className='mt-4 space-y-3'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='border rounded px-3 py-2 w-full'
      />

      <div className='flex gap-2'>
        <button
          onClick={handleUpdate}
          className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded'
        >
          Güncelle
        </button>

        <button
          onClick={handleDelete}
          className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded'
        >
          Sil
        </button>
      </div>
    </div>
  );
}
