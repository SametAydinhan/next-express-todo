import mongoose, { Schema, Document } from "mongoose";

export interface Todo extends Document {
  title: string;
  completed: boolean;
}

const TodoSchema = new Schema<Todo>(
  {
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Todo = mongoose.models.Todo || mongoose.model<Todo>("Todo", TodoSchema);
