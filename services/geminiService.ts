
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const model = 'gemini-2.5-flash';

export const generateQuest = async (): Promise<string> => {
  if (!API_KEY) {
    throw new Error("API Key is not configured. Please set the API_KEY environment variable.");
  }

  const prompt = `
    You are a creative director for a next-generation open-world game called 'Aethelgard: Echoes of Eternity'.
    The game blends high fantasy, advanced sci-fi, and real-world mythology across diverse biomes like neon-drenched cyberpunk cities, ancient floating temples, and bio-luminescent forests.

    Generate a single, compelling quest concept that a player might discover. The response should be formatted as a short JSON object with a "title" and a "description".

    The title should be evocative and mysterious.
    The description should be 2-3 sentences long, outlining the quest's core mystery or objective without giving away the ending.

    Example format:
    {
      "title": "The Celestial Orrery's Lament",
      "description": "An ancient observatory, long thought dormant, has begun broadcasting a sorrowful star-song. Ascend to the floating isles to decipher the cosmic melody and uncover what celestial secret it mourns."
    }

    Now, generate a new, unique quest in the specified JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });
    
    // Clean up potential markdown code block fences
    let textResponse = response.text.trim();
    if (textResponse.startsWith('```json')) {
      textResponse = textResponse.substring(7);
    }
    if (textResponse.endsWith('```')) {
      textResponse = textResponse.slice(0, -3);
    }

    return textResponse;
  } catch (error) {
    console.error("Error generating quest from Gemini API:", error);
    if (error instanceof Error && error.message.includes('API key not valid')) {
       throw new Error("The provided API Key is invalid. Please check your configuration.");
    }
    throw new Error("Failed to generate a quest. The world's echoes are silent for now.");
  }
};
