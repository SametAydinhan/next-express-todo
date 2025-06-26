import { getTodoById } from "@/lib/api";
import React from "react";

type Props = {
  params: { id: string };
};

const TodoDetailPage = async ({ params }: Props) => {
  const todo = await getTodoById(params.id);
  return (
    <div className='p-5 max-w-xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Todo Detail</h1>
      <div className='border rounded-md p-4'>
        <p>
          <strong>Title:</strong> {todo.title}
        </p>
        <p>
          <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default TodoDetailPage;
