// script.js — Vanilla JS frontend for the Todo app

const API_URL = "http://localhost:5000/todos";

// DOM elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const emptyMessage = document.getElementById("empty-message");
const errorMessage = document.getElementById("error-message");
const countEl = document.getElementById("count");
const progressBar = document.getElementById("progress");
const toggleBtn = document.getElementById("toggle");

// ---------- Helpers ----------
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = false;
  setTimeout(() => (errorMessage.hidden = true), 4000);
}

function updateCount(todos) {
  const total = todos.length;
  const done = todos.filter((t) => t.completed).length;

  countEl.textContent = `${done} / ${total} completed`;
  emptyMessage.style.display = total === 0 ? "block" : "none";

  // ✅ Update progress bar
  if (progressBar) {
    progressBar.style.width =
      total > 0 ? (done / total) * 100 + "%" : "0%";
  }
}

// ---------- Render ----------
function renderTodos(todos) {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.completed ? " completed" : "");
    li.dataset.id = todo._id;

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => toggleTodo(todo._id));

    // Text
    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteTodo(todo._id, li));

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  updateCount(todos);
}

// ---------- API calls ----------
async function fetchTodos() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to load todos");
    const todos = await res.json();
    renderTodos(todos);
  } catch (err) {
    showError(err.message || "Could not connect to server");
    renderTodos([]);
  }
}

async function addTodo(text) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to add todo");
    }

    await fetchTodos();
  } catch (err) {
    showError(err.message);
  }
}

async function toggleTodo(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "PUT" });
    if (!res.ok) throw new Error("Failed to update todo");
    await fetchTodos();
  } catch (err) {
    showError(err.message);
  }
}

async function deleteTodo(id, element) {
  try {
    element.classList.add("removing");
    await new Promise((r) => setTimeout(r, 220));

    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete todo");

    await fetchTodos();
  } catch (err) {
    showError(err.message);
    element.classList.remove("removing");
  }
}

// ---------- Form handling ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  addTodo(value);
  input.value = "";
  input.focus();
});

// ✅ Enter key support (extra safe UX)
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    form.dispatchEvent(new Event("submit"));
  }
});

// ---------- Dark Mode ----------
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// ---------- Initial load ----------
fetchTodos();