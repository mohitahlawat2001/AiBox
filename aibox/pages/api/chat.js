import { GoogleGenerativeAI , HarmCategory,
  HarmBlockThreshold, } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];
export default async function handler(req, res) {
  if (req.method === "POST") {
    const userMessage = req.body.message;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const chatSession = model.startChat({
        generationConfig,
        safetySettings,
        history: [
          {
            role: "user",
            parts: [
              {text: userMessage},
            ],
          },
        ],
      });
      const result = await chatSession.sendMessage(userMessage);
      // const result = await model.generateContent(userMessage);
      const response = await result.response;
      const text = await response.text();

      res.status(200).json({ reply: text });
    } catch (error) {
      console.error("Error processing the AI response:", error);
      res.status(500).json({ error: "Failed to process the AI response" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}