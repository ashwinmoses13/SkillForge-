import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ChatState, ChatMessage } from '../types';

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const API_URL = 'http://localhost:3001';

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      messages: [],
      isOpen: false,
      isLoading: false,

      addMessage: (role: 'user' | 'assistant', content: string): void => {
        const newMessage: ChatMessage = {
          id: generateId(),
          role,
          content,
          timestamp: new Date().toISOString(),
        };

        set((state) => ({
          messages: [...state.messages, newMessage],
        }));
      },

      sendMessage: async (content: string): Promise<void> => {
        const { addMessage } = get();
        
        // Add user message
        addMessage('user', content);
        
        // Set loading state
        set({ isLoading: true });

        try {
          const response = await fetch(`${API_URL}/api/chat`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: content }),
          });

          const data = await response.json();

          // Handle model loading state
          if (response.status === 503 && data.error === 'Model is loading') {
            addMessage('assistant', `⏳ ${data.message}`);
            return;
          }

          if (!response.ok) {
            console.error('API error:', data);
            throw new Error(data.error || 'Failed to get response from AI');
          }
          
          // Add AI response
          addMessage('assistant', data.response || 'I apologize, but I could not generate a response.');
        } catch (error) {
          console.error('Chat error:', error);
          addMessage('assistant', 'Sorry, I encountered an error. Please try again later.');
        } finally {
          set({ isLoading: false });
        }
      },

      toggleChat: (): void => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      closeChat: (): void => {
        set({ isOpen: false });
      },

      clearMessages: (): void => {
        set({ messages: [] });
      },
    }),
    {
      name: 'skillforge-chat-storage',
      partialize: (state) => ({ messages: state.messages }),
    }
  )
);
