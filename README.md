# 📝 TodoAI: Full Stack Todo Application

> A modern and responsive full stack task manager with real-time updates, progress tracking, and persistent storage.

TodoAI is a complete full stack web application designed to help users manage daily tasks efficiently. It combines a clean frontend with a powerful backend and MongoDB database to deliver a smooth and interactive experience.

---

## 🌟 What makes it special?

* Full Stack Integration – Seamless communication between frontend and backend
* Persistent Storage – Tasks stored in MongoDB (no data loss on refresh)
* Interactive UI – Clean, minimal, and responsive design
* Progress Tracking – Visual completion indicator
* Dark Mode Support – Improved user experience
* Real-time Updates – Instant UI updates without reload

---

## 🖥 System Overview & Screenshots

### 🎨 User Interface

| Light Mode                           | Dark Mode                          |
| ------------------------------------ | ---------------------------------- |
| ![Light Mode](Screenshots/Light.png) | ![Dark Mode](Screenshots/Dark.png) |

---

### ⚙️ Working Application

| Application Preview                 |
| ----------------------------------- |
| ![Working](Screenshots/Working.png) |

---

## 📂 Project Structure

Todo-App/
├── backend/                # Backend (Node.js + Express)
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│
├── frontend/               # Frontend (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── Screenshots/            # Project screenshots
│   ├── Light.png
│   ├── Dark.png
│   ├── Working.png
│
└── README.md

---

## 🛠 Tech Stack

### 🔹 Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB (Mongoose)

### 🔹 Architecture

* REST API (Client-Server Model)

---

## 🔬 System Working

### 📌 Core Functionalities

* Add Task → Store in database
* View Tasks → Fetch from backend
* Complete Task → Toggle status
* Delete Task → Remove permanently

---

### 🔄 Data Flow

Frontend → Express API → MongoDB → Express API → Frontend

---

## 🚀 Features

* Add tasks instantly
* Delete tasks easily
* Mark tasks as completed
* Progress bar tracking
* Clean and responsive UI
* Dark / Light mode toggle

---

## 📥 Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/hu17-m/ToDo-FullStack-.git
cd ToDo-FullStack-

---

### 2️⃣ Backend Setup

cd backend
npm install
node server.js

Server will run at:

http://localhost:5000

---

### 3️⃣ Frontend Setup

Open:

frontend/index.html

Or use Live Server (VS Code)

---

## 🔗 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /todos     | Fetch all tasks   |
| POST   | /todos     | Add new task      |
| PUT    | /todos/:id | Toggle completion |
| DELETE | /todos/:id | Delete task       |

---

## 👨‍💻 Developed By

Himanshu Gadekar
Final Year B.Tech CSE (2026)

🔗 GitHub: https://github.com/hu17-m
🔗 Project Repo: https://github.com/hu17-m/ToDo-FullStack-

---

## 🎯 Future Enhancements

* [ ] User Authentication (Login/Signup)
* [ ] Edit Task Feature
* [ ] Task Deadlines & Reminders
* [ ] Cloud Deployment (Render / Vercel)
* [ ] React Frontend Upgrade

---

## 📌 Conclusion

This project demonstrates a complete full stack CRUD application with frontend-backend integration, database persistence, and a modern UI. It is suitable for academic submission and portfolio use.

---

GitHub (https://github.com/hu17-m)
hu17-m - Overview
hu17-m has 7 repositories available. Follow their code on GitHub.