import React, { useState } from 'react';
import { SendHorizonal, Clock } from 'lucide-react';
import logo from '../assets/logo.png'; // Replace with your logo

export const ChatBot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hello! How can I assist you today?' },
  ]);
  const [recentSearches, setRecentSearches] = useState([
    'Track FIR status',
    'How to file a complaint?',
    'Nearest police station',
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };

    const botResponse = {
      sender: 'bot',
      perspectives: [
        {
          title: 'Legal Perspective',
          content: `From a legal standpoint, "${input}" may involve certain formal procedures. It's best to review the applicable laws.`,
        },
        {
          title: 'User Rights',
          content: `You have rights regarding "${input}". Consider reaching out to legal aid or using public legal resources.`,
        },
      ],
    };

    setMessages([...messages, userMessage, botResponse]);
    setRecentSearches([input, ...recentSearches.slice(0, 4)]);
    setInput('');
  };

  return (
    <div className="flex h-screen bg-[#0d1b14] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#102a1e] p-4 border-r border-gray-700">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-semibold">QueryAI</h1>
        </div>
        <div>
          <h2 className="text-sm text-gray-400 mb-2">Recent Searches</h2>
          <ul className="space-y-2 text-sm">
            {recentSearches.map((search, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-200 hover:text-white cursor-pointer">
                <Clock size={14} />
                {search}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center px-6 py-6 overflow-hidden">
        {/* Greeting */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold mb-2">Meet LegalBot</h1>
          <p className="text-gray-400 text-lg">Ask legal questions for better responses</p>
        </div>

        {/* Input Box */}
        <div className="w-full max-w-3xl mb-6 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything"
            className="flex-1 rounded-full px-5 py-2 bg-white text-black text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            onClick={handleSend}
            className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
          >
            <SendHorizonal size={18} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="w-full max-w-3xl flex-1 overflow-y-auto space-y-4 px-1">
          {messages.map((msg, index) => {
            if (msg.sender === 'user') {
              return (
                <div key={index} className="flex justify-end">
                  <div className="bg-green-700 text-white px-4 py-2 rounded-xl rounded-br-none max-w-[75%] text-sm">
                    {msg.text}
                  </div>
                </div>
              );
            } else if (msg.sender === 'bot' && msg.perspectives) {
              return (
                <div key={index} className="flex justify-start gap-4 flex-wrap">
                  {msg.perspectives.map((perspective, i) => (
                    <div
                      key={i}
                      className="bg-gray-200 text-black px-4 py-3 rounded-xl rounded-bl-none max-w-[48%] text-sm shadow-md"
                    >
                      <h4 className="font-bold mb-1">{perspective.title}</h4>
                      <p>{perspective.content}</p>
                    </div>
                  ))}
                </div>
              );
            } else {
              return (
                <div key={index} className="flex justify-start">
                  <div className="bg-gray-200 text-black px-4 py-2 rounded-xl rounded-bl-none max-w-[75%] text-sm">
                    {msg.text}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </main>
    </div>
  );
};
