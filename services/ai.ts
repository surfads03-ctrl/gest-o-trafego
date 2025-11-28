import { GoogleGenAI, Type } from "@google/genai";
import { DiagnosisAnswers, DiagnosisResult } from "../types";

// Fallback result in case API key is missing or fails
const FALLBACK_RESULT: DiagnosisResult = {
  score: 65,
  strengths: ["Intenção clara de crescimento", "Segmento com alta demanda"],
  weaknesses: ["Estratégia multicanal indefinida", "Possível saturação de criativos"],
  recommendation: "Recomendamos iniciar com uma estrutura de testes A/B focada em criativos para reduzir o CPA inicial."
};

export const generateDiagnosis = async (answers: DiagnosisAnswers): Promise<DiagnosisResult> => {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn("API_KEY not found. Using fallback diagnosis.");
    return new Promise((resolve) => setTimeout(() => resolve(FALLBACK_RESULT), 1500));
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const prompt = `
      Atue como um especialista sênior em Tráfego Pago e Marketing de Performance.
      Analise o seguinte perfil de cliente potencial e gere um diagnóstico curto e impactante.
      
      Dados do cliente:
      - Segmento: ${answers.segment}
      - Investimento Mensal: ${answers.investment}
      - Plataforma Atual: ${answers.platform}
      - Objetivo Principal: ${answers.goal}
      - Maior Dor: ${answers.painPoint}

      Retorne um JSON com:
      - score (0 a 100, baseado na maturidade digital percebida)
      - strengths (lista de 2 pontos fortes)
      - weaknesses (lista de 2 pontos fracos/riscos)
      - recommendation (uma frase estratégica de impacto de até 20 palavras)
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER },
            strengths: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            weaknesses: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            recommendation: { type: Type.STRING }
          },
          required: ["score", "strengths", "weaknesses", "recommendation"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as DiagnosisResult;
    }
    
    return FALLBACK_RESULT;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return FALLBACK_RESULT;
  }
};