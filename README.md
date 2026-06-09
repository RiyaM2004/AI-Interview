# 🎯 AI Interview IQ

An AI-powered mock interview platform that conducts personalized interviews based on a candidate's resume, evaluates spoken/typed answers in real time, and generates a detailed performance report — complete with AI video avatars, a credits system, and confidence/communication/correctness scoring.

---

## ✨ Features

- 🔐 **Google Authentication** — sign in with Google (Firebase on the frontend, JWT httpOnly cookie sessions on the backend)
- 📄 **Resume Analysis** — upload your resume (PDF); the AI extracts your role, experience, projects, and skills
- 🤖 **AI-Generated Questions** — 5 tailored questions per interview with difficulty progression (easy → medium → hard)
- 🎥 **AI Video Avatars** — male/female interviewer avatars for an immersive experience
- ⏱️ **Per-Question Timer** — each question has a time limit (60–120 seconds)
- 📊 **Smart Scoring** — every answer is scored on **Confidence**, **Communication**, and **Correctness** (0–10 each)
- 📈 **Detailed Report** — overall score + per-question feedback shown with circular progress bars
- 💳 **Credits System** — users start with 100 credits; each interview costs 50 credits
- 🗂️ **Two Interview Modes** — **HR** and **Technical**

---

## 🛠️ Tech Stack

### Frontend (`client/`)
| Tool | Purpose |
|------|---------|
| React 19 + Vite 8 | UI & build tooling |
| Redux Toolkit + React Redux | State management |
| React Router 7 | Routing |
| Tailwind CSS 4 | Styling |
| Firebase | Google authentication |
| Motion (Framer Motion) | Animations |
| react-circular-progressbar | Score visualizations |
| Axios | API requests |

### Backend (`server/`)
| Tool | Purpose |
|------|---------|
| Node.js + Express 5 | REST API server |
| MongoDB + Mongoose | Database |
| JSON Web Token | Auth (httpOnly cookies, 7-day expiry) |
| Multer | Resume file uploads |
| pdfjs-dist | Extract text from PDF resumes |
| OpenRouter API (`openai/gpt-4o-mini`) | AI question generation & answer evaluation |
| cookie-parser, cors, dotenv | Server utilities |

---

## 📁 Project Structure

```
AI-Interview-IQ/
├── client/                     # React + Vite frontend
│   ├── src/
│   │   ├── components/         # AuthModel, Navbar, Footer, Timer,
│   │   │                       # Step1Setup, Step2Interview, Step3Report
│   │   ├── pages/              # HomePage, Auth, InterviewPage, InterviewReport
│   │   ├── redux/              # store.js, userSlice.js
│   │   ├── utils/              # firebase.js
│   │   ├── assets/             # images + AI avatar videos
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── server/                     # Express + MongoDB backend
    ├── config/                 # connectDb.js, token.js
    ├── controllers/            # auth, user, interview controllers
    ├── middlewares/            # isAuth.js (JWT guard), multer.js (uploads)
    ├── models/                 # user.model.js, interview.model.js
    ├── routes/                 # auth, user, interview routes
    ├── services/               # openRouter.service.js (AI calls)
    └── index.js                # server entry (port 8000)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB database (local or MongoDB Atlas)
- An [OpenRouter](https://openrouter.ai/) API key
- A Firebase project (for Google sign-in)

### 1. Clone the repository
```bash
git clone https://github.com/RiyaM2004/AI-Interview.git
cd AI-Interview
```

### 2. Backend setup
```bash
cd server
npm install
```

Create a `server/.env` file:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
```

Start the server:
```bash
npm run dev
```
Server runs at **http://localhost:8000**

### 3. Frontend setup
```bash
cd ../client
npm install
```

Create a `client/.env` file:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

Start the frontend:
```bash
npm run dev
```
App runs at **http://localhost:5173**

> ⚠️ **Never commit your `.env` files.** They are already in `.gitignore`. Keep your API keys private.

---

## 🔌 API Endpoints

### Auth — `/api/auth`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/google-auth` | Sign in / register via Google |
| GET  | `/logout` | Clear session cookie |

### User — `/api/user`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/current-user` | Get the logged-in user |

### Interview — `/api/interview`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/analyze-resume` | Upload + parse resume, extract details |
| POST | `/generate-question` | Generate 5 AI questions (costs 50 credits) |
| POST | `/submit-answer` | Score a single answer (confidence/communication/correctness) |
| POST | `/finish-interview` | Aggregate final scores & feedback |

> Endpoint paths above reflect the controller logic — adjust to match your exact route definitions if they differ.

---

## 🧠 How It Works

1. **Sign in** with Google.
2. **Upload your resume** — the AI extracts your role, experience, projects, and skills.
3. **Pick a mode** (HR or Technical) — the AI generates 5 questions of increasing difficulty.
4. **Answer each question** within the time limit while interacting with an AI avatar.
5. Each answer is **scored by the AI** on confidence, communication, and correctness.
6. **Get your report** — an overall score plus per-question breakdown and feedback.

---

## 🗃️ Data Models

**User**
| Field | Type | Notes |
|-------|------|-------|
| name | String | required |
| email | String | required, unique |
| credits | Number | default 100 |
| timestamps | — | createdAt / updatedAt |

**Interview**
| Field | Type | Notes |
|-------|------|-------|
| userId | ObjectId → User | required |
| role | String | required |
| experience | String | required |
| mode | String | `HR` or `Technical` |
| resumeText | String | extracted resume text |
| questions | Array | per-question Q/A, difficulty, timeLimit, score, confidence, communication, correctness, feedback |
| finalScore | Number | default 0 |
| status | String | `Incompleted` or `completed` |

---

## 📜 Available Scripts

**Server**
```bash
npm run dev      # start with nodemon
```

**Client**
```bash
npm run dev      # start Vite dev server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # run ESLint
```

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a feature branch, and open a pull request.

## 📄 License

This project is currently unlicensed. Add a `LICENSE` file if you intend to make it open source.

---

Built with ❤️ using the MERN stack and OpenRouter AI.