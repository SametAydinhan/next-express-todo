import app from "./app";
import { connectDB } from "./config/db";

const PORT = 8080;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
}

start();
