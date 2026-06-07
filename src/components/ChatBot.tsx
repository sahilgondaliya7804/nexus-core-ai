import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, Command } from 'lucide-react';
import { Message } from '../types';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'ai', text: 'Nexus Intelligence initialized. How can I assist your relationship workflows today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;
    
    const newUserMsg: Message = { id: Date.now().toString(), sender: 'user', text: inputValue };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue })
      });
      
      const data = await response.json();
      setMessages(prev => [...prev, data]);
    } catch (error) {
      console.error("Failed to send message:", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        sender: 'ai',
        text: 'Sorry, I encountered an error communicating with the intelligence engine.'
      }]);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.3)] flex items-center justify-center z-50 text-white transition-colors"
          >
            <Sparkles className="w-5 h-5 text-[#A78BFA]" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 w-80 sm:w-[400px] rounded-[32px] glass-panel border border-white/10 shadow-2xl flex flex-col overflow-hidden z-50 bg-[#050816]/90"
            style={{ height: '600px', maxHeight: 'calc(100vh - 64px)' }}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/20">
                  <Command className="w-4 h-4 text-[#A78BFA]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-white tracking-wide">Nexus Engine</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_8px_#34C759] animate-pulse"></span>
                    <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-5 py-4 text-[14px] font-light leading-[1.6] ${
                    msg.sender === 'user' 
                      ? 'bg-white text-[#050816] rounded-t-[20px] rounded-bl-[20px] rounded-br-[4px]' 
                      : 'bg-white/5 border border-white/5 text-white/80 rounded-t-[20px] rounded-br-[20px] rounded-bl-[4px]'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/[0.02]">
              <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 focus-within:bg-white/10 focus-within:border-white/20 transition-all">
                <input 
                  type="text"
                  placeholder="Query intelligence..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  className="w-full bg-transparent border-none outline-none py-3 pl-5 pr-12 text-[14px] text-white placeholder:text-white/30 font-light"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 w-10 h-10 flex items-center justify-center bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-full text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
