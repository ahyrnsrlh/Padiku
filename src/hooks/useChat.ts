import { useState } from 'react';
import { getChatResponse } from '../services/ai';
import { ChatMessage } from '../types/chat';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Halo! Saya adalah TanyaPadiku yang siap membantu Anda mendiagnosa penyakit pada tanaman padi. Apa yang ingin Anda tanyakan?'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Add user message
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content
      };
      setMessages(prev => [...prev, userMessage]);

      // Get AI response
      const response = await getChatResponse(content);

      // Add AI response
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError('Gagal mendapatkan respons dari AI. Silakan coba lagi.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage
  };
}