# 🚀 ResumeAI

<div align="center">

### AI-Powered Resume Analyzer & ATS Optimization Platform

Analyze resumes, match them against job descriptions, identify missing keywords, and receive actionable AI-powered suggestions to improve ATS performance.

Built with **Next.js**, **Node.js**, **Express**, and **Google Gemini AI**.

</div>

---

## 📸 Screenshots

### 🏠 Landing Page

<!-- Add screenshot here -->

<img width="1530" height="1025" alt="image" src="https://github.com/user-attachments/assets/a4a22140-462e-43b1-8ba6-ec132584b470" />


---

### 📊 ATS Analysis Dashboard

<!-- Add screenshot here -->

<img width="1529" height="1043" alt="image" src="https://github.com/user-attachments/assets/4fa90217-7a7d-4c16-8f15-8580c8fd7259" />


---

### 🤖 AI Feedback & Suggestions

<!-- Add screenshot here -->

<img width="1511" height="1047" alt="image" src="https://github.com/user-attachments/assets/4ef08c4b-365a-4420-be47-371188080063" />


---

## ✨ Features

### 📄 Resume Analysis

* Upload PDF and DOCX resumes
* Extract and process resume content automatically
* Generate ATS compatibility scores

### 🎯 Job Description Matching

* Compare resumes against specific job descriptions
* Identify matched and missing keywords
* Calculate keyword match percentage

### 🤖 AI-Powered Suggestions

* Generate actionable resume improvements
* Highlight strengths and weaknesses
* Improve resume bullet points using AI
* Recommend industry-relevant keywords

### ⚡ Modern User Experience

* No authentication required
* Single-page application experience
* Responsive design
* Smooth animations and transitions
* Fast real-time analysis

---

## 🛠 Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

### Backend

* Node.js
* Express.js
* Multer
* pdf-parse
* mammoth

### AI Integration

* Google Gemini API

### Development Tools

* Git & GitHub
* Vercel
* Render

---

## 📁 Project Structure

```text
Resume-AI/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── context/
│   │   └── lib/
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Frontend (`frontend/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:5050/api
```

Production Example:

```env
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com/api
```

---

### Backend (`backend/.env`)

```env
GEMINI_API_KEY=your_gemini_api_key
PORT=5050
```

---

## 💻 Running Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Application will be available at:

```text
http://localhost:3000
```

---

## 🚀 Deployment

### Frontend (Vercel)

1. Import GitHub repository
2. Set Root Directory:

```text
frontend
```

3. Add Environment Variables:

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com/api
```

---

### Backend (Render)

1. Create a Web Service
2. Set Root Directory:

```text
backend
```

3. Add Environment Variables:

```env
GEMINI_API_KEY=your_api_key
```

---

## 🎯 Future Improvements

* Resume Builder
* Resume Version Management
* PDF Export of Improved Resume
* Multi-Job Comparison
* Advanced ATS Scoring Engine
* Personalized Career Recommendations

---

## 📚 What I Learned

While building ResumeAI, I explored:

* Full-stack application architecture
* REST API development with Express
* File handling and document parsing
* Prompt engineering
* AI integration using Gemini
* Frontend state management
* Production deployment workflows
* Environment variable management
* Debugging real-world deployment issues

---

## 👨‍💻 Author

**Aditya Idnani**

Student Developer | Full Stack & AI Enthusiast

GitHub: https://github.com/Aditya-Idnani

---

⭐ If you found this project interesting, consider giving it a star.
