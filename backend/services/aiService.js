import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeWithAI(resumeText, jobDescription) {
  const model = genAI.getGenerativeModel({
    model : "gemini-3-flash-preview",
  });

  const prompt = `
Analyze resume and return JSON:

Resume:
${resumeText}

Job:
${jobDescription || "General"}

Return:
{
  "ats_score": number,
  "strengths": [string],
  "weaknesses": [string],
  "improvement_suggestions": [string],
  "missing_keywords": [string]
}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return text;
}