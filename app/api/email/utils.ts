import { GoogleGenAI } from "@google/genai";

export class GenerativeUtils {
  async verifyMessageContents(message: string): Promise<boolean> {
    const apiKey = process.env.GEMINI_API_KEY;
    const client = new GoogleGenAI({ apiKey });

    const response = await client.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: message,
      config: {
        systemInstruction:
          'You are a content moderation agent for a siding/roofing company in New York. You will analyze real interest messages vs spam or promotional content. Return "true" if the message is relevant and genuine, otherwise return "false".',
        responseMimeType: "text/plain",
      },
    });

    if (!response?.text || response.text.length === 0) {
      console.error("Invalid response from Google GenAI:", response);
      return false;
    }

    if (response.text !== "true" && response.text !== "false") {
      console.error("Unexpected response from Google GenAI:", response.text);
      return false;
    }

    return response.text === "true";
  }
}
