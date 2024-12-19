import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyABHNhXDQocDtLVPh4rUhHRs7NnxI8WPvQ');

export async function getChatResponse(message: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `You are an AI assistant specialized in rice plant disease diagnosis. 
    You should provide helpful and accurate information about rice plant diseases, 
    their symptoms, causes, and treatments. 

    User message: ${message}

    Please provide a response in Bahasa Indonesia.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting chat response:', error);
    throw new Error('Failed to get response from AI');
  }
}