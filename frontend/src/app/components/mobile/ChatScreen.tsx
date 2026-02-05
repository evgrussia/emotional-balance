import { useState } from 'react';
import { ChevronLeft, MoreVertical, Mic, Send, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from '../ui/button';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: 'Привет! 👋 Я твой AI-помощник. Расскажи, что тебя беспокоит, или выбери тему ниже.',
      timestamp: '14:32'
    }
  ]);

  const suggestedPrompts = [
    '😟 Меня что-то тревожит',
    '😰 Сильный стресс',
    '😔 Грустно и одиноко',
    '🤔 Хочу разобраться'
  ];

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: '#FAFAF8' }}>
      {/* Header */}
      <div 
        className="px-4 py-4 flex items-center justify-between"
        style={{ backgroundColor: '#FFFFFF', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
      >
        <div className="flex items-center gap-3">
          <button>
            <ChevronLeft className="w-6 h-6" style={{ color: '#737370' }} />
          </button>
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{ backgroundColor: '#5F9A63', color: '#FFFFFF' }}
            >
              🤖
            </div>
            <span className="font-semibold" style={{ color: '#262624' }}>
              AI-помощник
            </span>
          </div>
        </div>
        <button>
          <MoreVertical className="w-5 h-5" style={{ color: '#737370' }} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 pb-32">
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.type === 'ai' ? (
              <div className="flex gap-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                  style={{ backgroundColor: '#5F9A63', color: '#FFFFFF' }}
                >
                  🤖
                </div>
                <div className="space-y-2">
                  <div 
                    className="rounded-2xl rounded-tl-none p-3 max-w-[280px]"
                    style={{ backgroundColor: '#F4F4F1' }}
                  >
                    <p className="text-sm" style={{ color: '#262624' }}>
                      {msg.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs" style={{ color: '#A8A8A3' }}>
                      {msg.timestamp}
                    </span>
                    <button>
                      <ThumbsUp className="w-4 h-4" style={{ color: '#A8A8A3' }} />
                    </button>
                    <button>
                      <ThumbsDown className="w-4 h-4" style={{ color: '#A8A8A3' }} />
                    </button>
                  </div>
                  <p className="text-xs" style={{ color: '#A8A8A3' }}>
                    Не является медицинской услугой
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <div 
                  className="rounded-2xl rounded-tr-none p-3 max-w-[280px]"
                  style={{ backgroundColor: '#5F9A63', color: '#FFFFFF' }}
                >
                  <p className="text-sm">
                    {msg.text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Suggested Prompts */}
        {messages.length === 1 && (
          <div className="grid grid-cols-2 gap-2 pt-4">
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                className="rounded-lg p-3 text-left text-sm transition-all hover:scale-105"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E8E3', color: '#262624' }}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div 
        className="fixed bottom-16 left-0 right-0 px-4 py-3"
        style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8E8E3' }}
      >
        <div className="flex items-end gap-2 max-w-[393px] mx-auto">
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Напишите сообщение..."
              rows={1}
              className="w-full resize-none rounded-lg px-4 py-3 pr-12 text-sm"
              style={{ 
                backgroundColor: '#F4F4F1',
                color: '#262624',
                border: 'none',
                outline: 'none',
                minHeight: '44px',
                maxHeight: '120px'
              }}
            />
            <button 
              className="absolute right-2 bottom-2 w-9 h-9 flex items-center justify-center rounded-lg"
              style={{ backgroundColor: '#F0F6F0' }}
            >
              <Mic className="w-5 h-5" style={{ color: '#5F9A63' }} />
            </button>
          </div>
          <button 
            className="w-11 h-11 flex items-center justify-center rounded-lg"
            style={{ 
              backgroundColor: message ? '#5F9A63' : '#E8E8E3',
              color: '#FFFFFF'
            }}
            disabled={!message}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
