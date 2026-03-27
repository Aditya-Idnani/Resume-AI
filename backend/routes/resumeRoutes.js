import express from "express";
import multer from "multer";

import { uploadResume } from "../controllers/resumeController.js";
import { improveResumeBullet } from "../controllers/bulletController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/analyze", upload.single("resume"), uploadResume);

router.post("/improve-bullet", improveResumeBullet);

export default router;