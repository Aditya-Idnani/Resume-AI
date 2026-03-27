# ResumeAI

ResumeAI is a full-stack web application that helps users analyze and improve their resumes using AI.
It focuses on giving simple ATS-based feedback and suggestions that can actually help in placements.

---

## What this project does

* Upload a resume and get an **ATS compatibility score**
* See which **keywords are matched or missing**
* Get **AI-based suggestions** to improve your resume
* Improve individual **resume bullet points** using AI

---

## Features

* ATS score analysis
* Keyword matching (matched / missing / recommended)
* Strengths and weaknesses detection
* AI-generated improvement suggestions
* Bullet point improvement using Gemini AI

---

## Tech Stack

**Frontend**

* Next.js
* TypeScript

**Backend**

* Node.js
* Express

**AI**

* Google Gemini API

---

## How to run locally

### Backend

bash
cd backend
npm install


Create a `.env` file:

GEMINI_API_KEY=your_api_key
PORT=5050


Run:

bash
npm run dev


---

### Frontend

bash
cd frontend
npm install
npm run dev


---

## Notes

* `.env` file is not included for security reasons
* Make sure to use your own Gemini API key
* This project was built as a learning project while exploring full-stack + AI integration

---

## Future Improvements

* Better resume parsing
* More accurate ATS scoring
* Authentication system
* Resume history

---

## Author

Aditya Idnani
