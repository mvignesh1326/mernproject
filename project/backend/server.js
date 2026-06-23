import express from "express";
import cors from "cors";
import ConnectDB from "./config/db.js";
import adminRouter from "./routes/adminRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.json({ message: "Backend server is running" });
});

await ConnectDB();

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Stop the existing backend process before starting a new one.`);
    return;
  }

  throw error;
});