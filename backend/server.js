// server.js — Express + MongoDB backend for the Todo app
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/todoapp";

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());

// ---------- Database connection ----------
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected:", MONGO_URI))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// ---------- Mongoose model ----------
const todoSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

// ---------- Helpers ----------
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// ---------- Routes ----------

// GET /todos — list all todos (newest first)
app.get(
  "/todos",
  asyncHandler(async (_req, res) => {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  })
);

// POST /todos — create a new todo
app.post(
  "/todos",
  asyncHandler(async (req, res) => {
    const { text } = req.body;
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Text is required" });
    }
    const todo = await Todo.create({ text: text.trim() });
    res.status(201).json(todo);
  })
);

// PUT /todos/:id — toggle completed
app.put(
  "/todos/:id",
  asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  })
);

// DELETE /todos/:id — delete a todo
app.delete(
  "/todos/:id",
  asyncHandler(async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json({ message: "Todo deleted", id: req.params.id });
  })
);

// Health check
app.get("/", (_req, res) => res.json({ status: "ok", service: "todo-api" }));

// ---------- Global error handler ----------
app.use((err, _req, res, _next) => {
  console.error("Server error:", err);
  if (err.name === "CastError") {
    return res.status(400).json({ error: "Invalid id" });
  }
  res.status(500).json({ error: "Internal server error" });
});

// ---------- Start server ----------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
