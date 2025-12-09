import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askGemini = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    return "خطا: کلید API یافت نشد. لطفاً تنظیمات برنامه را بررسی کنید.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `You are an expert specific to the game Counter-Strike 1.6. 
        You speak Persian (Farsi).
        You know everything about weapon stats, recoil patterns, map strategies (de_dust2, de_inferno, etc.), console commands, and historical bugs.
        Keep answers concise, helpful for a gamer, and formatted nicely.
        If asked about cheats, only provide standard console commands (sv_cheats), do not provide links to external illegal hacking software.
        Always maintain a "Pro Gamer" tone.`
      }
    });
    
    return response.text || "متاسفانه پاسخی دریافت نشد.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.";
  }
};
