📝 TodoAI: Full Stack Todo Application

> A modern task management system with real-time updates, progress tracking, and persistent storage.

TodoAI is a **full stack web application** that allows users to efficiently manage daily tasks with a clean UI and powerful backend. It integrates frontend, backend, and database to provide a seamless experience with real-time updates and data persistence.


 🌟 What makes it special?

* **Full Stack Integration:** Seamless communication between frontend (HTML/CSS/JS) and backend (Node.js + Express)
* **Persistent Storage:** Tasks are stored in MongoDB and remain even after refresh
* **Interactive UI:** Includes progress bar, animations, and dark mode
* **Real-time Updates:** Changes reflect instantly without page reload
* **User-Friendly Design:** Clean, minimal, and responsive layout


🖥 System Overview & Visualizations

 Primary Interface

|                    Light Mode                   |                   Dark Mode                   |
| :---------------------------------------------: | :-------------------------------------------: |
| ![Light Mode](Screenshots/Light%20Mode%201.png) | ![Dark Mode](Screenshots/Dark%20mode%201.png) |

 Application in Action

|           Working Application           |
| :-------------------------------------: |
| ![Working](Screenshots/Working%201.png) |

🔗 **View Repository:**
https://github.com/hu17-m/ToDo-FullStack-



📂 Project Structure

```text
Todo-App/
├── backend/                # Node.js + Express backend
│   ├── server.js           # API & database connection
│   ├── package.json        # Dependencies
│
├── frontend/               # UI Layer
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── Screenshots/            # UI Images
│   ├── Light Mode 1.png
│   ├── Dark mode 1.png
│   ├── Working 1.png
│
└── README.md




🛠 Tech Stack & Architecture

Core Components

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Architecture:** REST API-based client-server model


🔬 System Working

 CRUD Operations (Core Logic)

* **Create:** Add new tasks
* **Read:** Fetch all tasks from MongoDB
* **Update:** Toggle task completion
* **Delete:** Remove tasks

 Data Flow

Frontend → API (Express) → MongoDB → API → Frontend

🚀 Key Functionalities

* Add new tasks instantly
* Delete tasks with animation
* Mark tasks as completed
* Visual progress tracking
* Dark mode support
* Responsive UI



📥 Installation & Usage

1️⃣ Clone Repository

bash
git clone https://github.com/hu17-m/ToDo-FullStack-.git



 2️⃣ Backend Setup
bash
cd backend
npm install
node server.js

 3️⃣ Frontend Setup

Open:

bash
frontend/index.html


or use Live Server

 🔗 API Endpoints

| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /todos     | Fetch all tasks   |
| POST   | /todos     | Add new task      |
| PUT    | /todos/:id | Toggle completion |
| DELETE | /todos/:id | Delete task       |

 👨‍💻 Developed By

Himanshu Gadekar
Final Year B.Tech CSE (2026)

🔗 GitHub: https://github.com/hu17-m
🔗 Project: https://github.com/hu17-m/ToDo-FullStack-

 🎯 Future Enhancements

* [ ] User Authentication (Login/Signup)
* [ ] Edit Task Feature
* [ ] Cloud Deployment (Render/Vercel)
* [ ] React Frontend Upgrade

 📌 Conclusion

This project demonstrates a complete **Full Stack CRUD Application** with modern UI design, backend integration, and database persistence—making it a strong foundation for real-world applications and interviews.


