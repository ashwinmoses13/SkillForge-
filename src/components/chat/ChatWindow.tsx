import { useRef, useEffect, useState } from 'react';
import { useChatStore } from '../../store/chatStore';
import { ChatMessage } from './ChatMessage';

export const ChatWindow: React.FC = () => {
  const { messages, isOpen, isLoading, sendMessage, closeChat } = useChatStore();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Prevent body scroll when chat is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    const message = inputValue.trim();
    setInputValue('');
    await sendMessage(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chat-fullscreen">
      {/* Sidebar */}
      <aside className="chat-sidebar">
        <div className="chat-sidebar-header">
          <button className="sidebar-new-chat" onClick={closeChat}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Page
          </button>
        </div>
        <div className="chat-sidebar-content">
          <div className="sidebar-title">siscode.ai</div>
          <p className="sidebar-description">Your AI Learning Assistant</p>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="chat-main">
        {/* Header */}
        <header className="chat-main-header">
          <div className="chat-header-title">
            <span>siscode.ai</span>
          </div>
          <button className="chat-mobile-back" onClick={closeChat}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </header>

        {/* Messages Area */}
        <div className="chat-messages-area">
          {messages.length === 0 ? (
            <div className="chat-welcome-fullscreen">
              <div className="welcome-logo">🤖</div>
              <h1>siscode.ai</h1>
              <p>How can I help you with your learning today?</p>
              <div className="suggested-prompts-grid">
                <button onClick={() => sendMessage('Explain object-oriented programming')}>
                  <span className="prompt-icon">💡</span>
                  Explain OOP concepts
                </button>
                <button onClick={() => sendMessage('Help me understand React hooks')}>
                  <span className="prompt-icon">⚛️</span>
                  React hooks help
                </button>
                <button onClick={() => sendMessage('What are data structures?')}>
                  <span className="prompt-icon">📊</span>
                  Data structures
                </button>
                <button onClick={() => sendMessage('Explain API development')}>
                  <span className="prompt-icon">🔌</span>
                  API development
                </button>
              </div>
            </div>
          ) : (
            <div className="messages-container">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="chat-message assistant-message loading">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="message-bubble">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="chat-input-container">
          <div className="chat-input-box">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message siscode.ai..."
              rows={1}
              disabled={isLoading}
            />
            <button 
              className="chat-send-button"
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="chat-disclaimer">siscode.ai can make mistakes. Consider checking important information.</p>
        </div>
      </main>
    </div>
  );
};
