import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const improveBullet = async (bullet) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
  });

  const prompt = `
Improve this resume bullet point:

"${bullet}"

Make it:
- Strong
- Quantified
- Impactful

Return ONLY improved sentence.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};