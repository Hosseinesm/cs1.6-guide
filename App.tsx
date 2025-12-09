import React, { useState, useRef, useEffect } from 'react';
import { Category, ChatMessage } from './types';
import { WEAPONS, CHEATS, BUGS } from './constants';
import WeaponCard from './components/WeaponCard';
import CheatCard from './components/CheatCard';
import BugCard from './components/BugCard';
import { askGemini } from './services/geminiService';
import { Crosshair, Terminal, Bug, Cpu, Search, Send, User, Bot, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>(Category.WEAPONS);
  const [searchQuery, setSearchQuery] = useState('');
  
  // AI Chat State
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'سلام فرمانده! من دستیار هوشمند CS 1.6 هستم. هر سوالی راجع به بازی، استراتژی‌ها یا مشخصات داری بپرس.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputMessage
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    const responseText = await askGemini(userMsg.text);

    const aiMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText
    };

    setMessages(prev => [...prev, aiMsg]);
    setIsTyping(false);
  };

  // Filtering Logic
  const filteredWeapons = WEAPONS.filter(w => w.name.toLowerCase().includes(searchQuery.toLowerCase()) || w.description.includes(searchQuery));
  const filteredCheats = CHEATS.filter(c => c.command.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.includes(searchQuery));
  const filteredBugs = BUGS.filter(b => b.title.includes(searchQuery) || b.description.includes(searchQuery));

  return (
    <div className="min-h-screen bg-cs-dark text-white pb-20 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cs-dark/95 backdrop-blur border-b border-gray-800 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-black italic tracking-wider text-white">
            <span className="text-cs-accent">CS 1.6</span> GUIDE
          </h1>
          <div className="bg-green-900/20 px-2 py-1 rounded border border-green-800 text-xs text-green-500 font-mono">
             v1.0
          </div>
        </div>
        
        {activeTab !== Category.AI_ASSISTANT && (
          <div className="relative">
            <input 
              type="text" 
              placeholder="جستجو کنید..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/40 border border-gray-700 rounded-lg py-2 pr-10 pl-4 text-sm focus:outline-none focus:border-cs-accent transition-colors text-right"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="p-4 max-w-2xl mx-auto">
        
        {activeTab === Category.WEAPONS && (
          <div className="space-y-4 animate-fade-in">
            {filteredWeapons.map(weapon => (
              <WeaponCard key={weapon.id} weapon={weapon} />
            ))}
            {filteredWeapons.length === 0 && <p className="text-center text-gray-500 mt-10">سلاحی یافت نشد.</p>}
          </div>
        )}

        {activeTab === Category.CHEATS && (
          <div className="space-y-2 animate-fade-in">
            <div className="bg-yellow-900/20 border border-yellow-700/50 p-3 rounded mb-4 text-xs text-yellow-200">
              نکته: برای فعال‌سازی رمزها، ابتدا کلید ~ را بزنید تا کنسول باز شود، سپس کدها را وارد کنید.
            </div>
            {filteredCheats.map(cheat => (
              <CheatCard key={cheat.id} cheat={cheat} />
            ))}
             {filteredCheats.length === 0 && <p className="text-center text-gray-500 mt-10">رمزی یافت نشد.</p>}
          </div>
        )}

        {activeTab === Category.BUGS && (
          <div className="space-y-4 animate-fade-in">
             <div className="bg-blue-900/20 border border-blue-700/50 p-3 rounded mb-4 text-xs text-blue-200">
              هشدار: استفاده از برخی باگ‌ها در سرورهای آنلاین ممکن است باعث بن شدن شما شود.
            </div>
            {filteredBugs.map(bug => (
              <BugCard key={bug.id} bug={bug} />
            ))}
             {filteredBugs.length === 0 && <p className="text-center text-gray-500 mt-10">موردی یافت نشد.</p>}
          </div>
        )}

        {activeTab === Category.AI_ASSISTANT && (
          <div className="flex flex-col h-[calc(100vh-140px)]">
            <div className="flex-1 overflow-y-auto space-y-4 p-2 rounded-lg bg-black/20 mb-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-cs-accent' : 'bg-cs-blue'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`p-3 rounded-lg max-w-[80%] text-sm leading-6 ${
                    msg.role === 'user' ? 'bg-cs-red/20 border border-cs-red/50 text-white' : 'bg-gray-800 border border-gray-700 text-gray-200'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                 <div className="flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-cs-blue flex items-center justify-center shrink-0 animate-pulse">
                     <Bot className="w-5 h-5" />
                   </div>
                   <div className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-400 text-xs flex items-center">
                     درحال تایپ...
                   </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2 items-center bg-gray-900 p-2 rounded-xl border border-gray-700">
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="سوال خود را بپرسید..."
                className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2 py-1"
                disabled={isTyping}
              />
              <button 
                onClick={handleSendMessage}
                disabled={isTyping || !inputMessage.trim()}
                className={`p-2 rounded-full transition-colors ${
                  !inputMessage.trim() ? 'bg-gray-700 text-gray-500' : 'bg-cs-green text-black hover:bg-green-400'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#151518] border-t border-gray-800 pb-safe">
        <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
          <button 
            onClick={() => setActiveTab(Category.WEAPONS)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeTab === Category.WEAPONS ? 'text-cs-accent' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Crosshair className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold">تسلیحات</span>
          </button>
          
          <button 
            onClick={() => setActiveTab(Category.CHEATS)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeTab === Category.CHEATS ? 'text-cs-green' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Terminal className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold">رمزها</span>
          </button>
          
          <button 
            onClick={() => setActiveTab(Category.BUGS)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeTab === Category.BUGS ? 'text-yellow-500' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Bug className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold">باگ‌ها</span>
          </button>

          <button 
            onClick={() => setActiveTab(Category.AI_ASSISTANT)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${activeTab === Category.AI_ASSISTANT ? 'text-cs-blue' : 'text-gray-500 hover:text-gray-300'}`}
          >
            <Cpu className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold">دستیار</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;
