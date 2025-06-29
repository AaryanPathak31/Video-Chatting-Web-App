# Vibin

A modern social chat app to connect with friends, share hobbies and interests, and chat in real time!

Highlights:

- 🌐 Real-time Messaging with Typing Indicators & Reactions
- 📹 1-on-1 and Group Video Calls with Screen Sharing & Recording
- 🔐 JWT Authentication & Protected Routes
- 🌍 Language Exchange Platform with 32 Unique UI Themes
- ⚡ Tech Stack: React + Express + MongoDB + TailwindCSS + TanStack

---

## 🚀 Features

- **User Profiles:** Customizable profiles with avatar, bio, hobbies, interests, and location.
- **Friend System:** Send, accept, and manage friend requests.
- **Real-time Chat:** 1-on-1 and group messaging with typing indicators and reactions.
- **Video Calls:** High-quality video calls powered by Stream.
- **Notifications:** Get notified for friend requests, messages, and more.
- **Modern UI:** Beautiful, responsive design with multiple themes.
- **Secure:** JWT authentication and protected routes.

---

## 🖥️ Demo

> _Coming soon!_

---

## 🛠️ Installation

### 1. **Clone the Repository**

```bash
git clone https://github.com/AaryanPathak31/Video-Chatting-Web-App.git
cd Video-Chatting-Web-App
```

### 2. **Install Dependencies**

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## ⚙️ .env Setup

### **Backend (`/backend/.env`)**

Create a `.env` file in the `backend` folder with the following keys:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
JWT_SECRET_KEY=your_jwt_secret_key
NODE_ENV=development
```

- **MONGO_URI:** Your MongoDB connection string (local or Atlas).
- **STREAM_API_KEY & STREAM_API_SECRET:** Get these from [getstream.io](https://getstream.io/).
- **JWT_SECRET_KEY:** Any long, random string for JWT signing.

---

### **Frontend (`/frontend/.env`)**

Create a `.env` file in the `frontend` folder with:

```env
VITE_STREAM_API_KEY=your_stream_api_key
```

- **VITE_STREAM_API_KEY:** Must match the backend's `STREAM_API_KEY`.

---

## ▶️ Running the App

### **Start the Backend**

```bash
cd backend
npm run dev
```

### **Start the Frontend**

```bash
cd ../frontend
npm run dev
```

- The frontend will run on [http://localhost:5173](http://localhost:5173)
- The backend will run on [http://localhost:5001](http://localhost:5001)

---

## 📦 Main Libraries Used

### **Backend**

- express
- mongoose
- bcryptjs
- jsonwebtoken
- cookie-parser
- cors
- dotenv
- stream-chat

### **Frontend**

- react
- react-router
- @tanstack/react-query
- axios
- zustand
- stream-chat
- stream-chat-react
- @stream-io/video-react-sdk
- tailwindcss
- daisyui
- react-hot-toast

---

## 📝 Folder Structure

```
Vibin/
  backend/
    src/
      controllers/
      models/
      routes/
      ...
    .env
    package.json
  frontend/
    src/
      components/
      pages/
      hooks/
      ...
    .env
    package.json
  README.md
```

---

## 💡 Customization

- Change the theme in the frontend for a new look.
- Add more features: posts, stories, groups, etc.
- Integrate more social features as you grow!

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT

---

## 🙋‍♂️ Questions?

Open an issue or contact [AaryanPathak31](https://github.com/AaryanPathak31) on GitHub.
