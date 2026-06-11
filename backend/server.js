import "dotenv/config";

import express from "express";
import cors from "cors";

import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api", resumeRoutes);

// ✅ Health check (optional but useful)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Start server
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});