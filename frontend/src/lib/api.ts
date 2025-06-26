import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/todos`;

export const getTodos = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const createTodo = async (title: string) => {
  const res = await axios.post(BASE_URL, { title });
  return res.data;
};

export const updateTodo = async (
  id: string,
  data: { title?: string; completed?: boolean }
) => {
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id: string) => {
  await axios.delete(`${BASE_URL}/${id}`);
};