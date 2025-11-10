# 📝 Nott App (Flutter + Node.js)

A beginner-friendly full-stack app demonstrating how to connect a **Flutter frontend** with a **Node.js backend** using REST APIs.

---

## 🚀 Features

- Create, view, and delete notes
- Real-time refresh after adding/deleting
- Minimal yet complete full-stack example
- Uses in-memory storage (no database yet)

---

## 🧰 Tech Stack

| Layer    | Technology                        |
| -------- | --------------------------------- |
| Frontend | Flutter                           |
| Backend  | Node.js + Express                 |
| Database | In-memory (next upgrade: MongoDB) |

---

## 🗂️ Folder Structure

```
simple-notes-app/
│
├── backend/
│   ├── server.js
│   └── routes/
│
└── frontend/
    └── lib/
        ├── main.dart
        ├── screens/
        └── services/
```

---

## ⚙️ Backend Setup

```bash
cd backend
npm install express cors
node server.js
```

Server runs at 👉 `http://localhost:3000`

---

## 💙 Frontend Setup

```bash
cd frontend
flutter pub get
flutter run
```

If using an Android emulator, replace `localhost` with your machine IP in `api_service.dart`.

---

## 📚 API Endpoints

| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/notes`     | Get all notes       |
| POST   | `/notes`     | Add a new note      |
| DELETE | `/notes/:id` | Delete a note by ID |

---

## 👨‍💻 Authors

- Salsabila and Sukanya 🚀
  Full-stack explorers learning one project at a time!

---
