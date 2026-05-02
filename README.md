# 🚀 ResumeAI

ResumeAI is a full-stack AI-powered web application that analyzes resumes and provides actionable ATS-based feedback to improve job selection chances.

Built as a student project to explore real-world full-stack + AI integration.

---

## ✨ Features

- 📄 Upload resume and get ATS score
- 📊 Section-wise analysis (Skills, Experience, etc.)
- 🔍 Keyword matching (matched / missing)
- 🤖 AI suggestions using Gemini API
- ✏️ Bullet point improvement
- 📈 Resume history tracking (if enabled)

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express.js

### AI
- Google Gemini API

### Database
- Supabase

---

## 📁 Project Structure
Resume-AI/
├── frontend/ # Next.js app
├── backend/ # Express API

---

## ⚙️ Environment Variables

### Frontend (`.env.local`)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_API_URL=

---

### Backend (`.env`)
GEMINI_API_KEY=
PORT=5050

---

## 💻 Running Locally

### Backend

```bash
cd backend
npm install
npm run dev

### Frontend
```bash
cd frontend
npm install
npm run dev

🚀 Deployment
Frontend → Vercel
Backend → Render / Railway

⚠️ Notes
.env files are excluded for security
Use your own Gemini API key
Backend must be deployed before frontend works in production
🔮 Future Improvements
Authentication (Login system)
Resume storage
Better ATS scoring logic
Multi-job comparison
Export improved resume
👨‍💻 Author

Aditya Idnani