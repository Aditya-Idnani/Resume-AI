import express from "express";
import multer from "multer";

import { uploadResume } from "../controllers/resumeController.js";
import { improveResumeBullet } from "../controllers/bulletController.js";

import fs from "fs";

const router = express.Router();

const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const upload = multer({ dest: uploadDir });

router.post("/analyze", upload.single("resume"), uploadResume);

router.post("/improve-bullet", improveResumeBullet);

export default router;