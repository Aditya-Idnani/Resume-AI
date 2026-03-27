import fs from "fs";
import mammoth from "mammoth";
import { createRequire } from "module";

import { analyzeResume } from "../services/resumeAnalyzer.js";
import { parseResumeSections } from "../utils/parseResumeSections.js";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export const uploadResume = async (req, res) => {
  try {

    const file = req.file;

    // ❌ NO FILE
    if (!file) {
      return res.status(400).json({
        error: "No resume file uploaded"
      });
    }

    let extractedText = "";

    // ---------- HANDLE PDF ----------
    if (file.mimetype === "application/pdf") {

      const buffer = fs.readFileSync(file.path);
      const data = await pdfParse(buffer);

      extractedText = data.text;
    }

    // ---------- HANDLE DOCX ----------
    else if (
      file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {

      const result = await mammoth.extractRawText({
        path: file.path
      });

      extractedText = result.value;
    }

    else {
      return res.status(400).json({
        error: "Unsupported file type"
      });
    }

    // ---------- PARSE RESUME ----------
    const sections = parseResumeSections(extractedText);

    // ---------- JOB DESCRIPTION ----------
    const jobDescription = req.body.jobDescription || "";

    // ---------- AI ANALYSIS ----------
    let analysis;

    try {
      analysis = await analyzeResume(sections, jobDescription);
    } catch {
      // 🔥 FALLBACK (NEVER CRASH)
      analysis = {
        atsScore: 70,
        strengths: ["Basic structure"],
        weakAreas: ["AI failed"],
        summary: "Fallback result due to AI error",
        keywordAnalysis: {
          matchPercentage: 60,
          matchedKeywords: [],
          missingKeywords: [],
          recommendedKeywords: [],
        },
      };
    }

    // ---------- SUCCESS ----------
    return res.json({
      message: "Resume analyzed successfully",
      analysis
    });

  } catch {
    return res.status(500).json({
      error: "Error processing resume"
    });

  }
};