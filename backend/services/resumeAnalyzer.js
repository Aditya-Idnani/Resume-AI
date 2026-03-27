import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const analyzeResume = async (sections, jobDescription) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    const prompt = `
Analyze this resume and return STRICT JSON:

Resume:
${JSON.stringify(sections)}

Job Description:
${jobDescription || "General"}

Return:
{
  "atsScore": number,
  "strengths": [string],
  "weakAreas": [string],
  "summary": string,
  "keywordAnalysis": {
    "matchPercentage": number,
    "matchedKeywords": [string],
    "missingKeywords": [string],
    "recommendedKeywords": [string]
  }
}
`;

    const result = await model.generateContent(prompt);
    let text = result.response.text();

    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    return JSON.parse(text);
  } catch {
    return {
      atsScore: 50,
      strengths: ["Fallback mode"],
      weakAreas: ["AI failed"],
      summary: "Check API key / billing",
      keywordAnalysis: {
        matchPercentage: 0,
        matchedKeywords: [],
        missingKeywords: [],
        recommendedKeywords: [],
      },
    };
  }
};