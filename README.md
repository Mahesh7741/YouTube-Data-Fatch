# 📹 YouTube Video Fetch 

Welcome to **YouTube Video Explorer & Manager**! This full-stack application allows users to explore YouTube videos by channel, fetch videos dynamically using the YouTube API, and manage video data in a local database. Users can store, view, and delete videos from the database through a simple and intuitive interface.

## 🚀 Features

- **Fetch Videos by Channel**: Enter a YouTube Channel ID to fetch videos dynamically.
- **Popular Channels**: Preloaded list of popular tech channels for quick exploration.
- **Store Videos**: Save video details in a local MongoDB database.
- **View Stored Videos**: View all stored videos with thumbnails and stats.
- **Delete Videos**: Remove videos from the database.

---

## 🖼️ Demo

### 💻 Screenshot
![Screenshot 2024-12-07 000435](https://github.com/user-attachments/assets/e45d4bb5-c6e8-4f1d-8e4b-161d5282d820)


### 🎥 Demo Video

https://github.com/user-attachments/assets/b8171805-a148-4f1c-af37-6863640de492


---

## 🛠️ Tech Stack

- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: YouTube Data API

---

## 📂 Project Structure

```
project/
│
├── backend/
│   ├── app.js  # Express server with routes
│   └── models/ # Mongoose models
│
├── frontend/
│   ├── index.html  # Main interface
│   └── assets/     # Static assets (CSS, JS)
│
└── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js & npm installed
- MongoDB installed and running locally
- A valid **YouTube Data API Key**

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Mahesh7741/your-repo.git
   cd your-repo/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the MongoDB URI in `app.js` (if necessary):
   ```javascript
   const mongoURI = 'mongodb://localhost:27017/youtubeVideos';
   ```

4. Run the backend server:
   ```bash
   node app.js
   ```
   The server will be running at `http://localhost:3000`.

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Open `index.html` in your browser:
   ```bash
   open index.html
   ```

3. Replace the `[APIKEY]` placeholder in `index.html` with your YouTube Data API Key:
   ```javascript
   const apiKey = '[APIKEY]';
   ```

---
