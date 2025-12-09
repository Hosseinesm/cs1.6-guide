import React, { useState } from 'react';
import { CheatCode } from '../types';
import { Copy, Check, Terminal } from 'lucide-react';

interface CheatCardProps {
  cheat: CheatCode;
}

const CheatCard: React.FC<CheatCardProps> = ({ cheat }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cheat.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-cs-dark border border-cs-gray p-4 rounded-lg mb-3 flex flex-col gap-2 shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cs-green" />
            <span className={`text-xs px-2 py-0.5 rounded border ${
            cheat.type === 'CHEAT' ? 'border-cs-accent text-cs-accent' : 'border-cs-blue text-cs-blue'
            }`}>
            {cheat.type === 'CHEAT' ? 'رمز تقلب' : 'تنظیمات'}
            </span>
        </div>
      </div>
      
      <div className="bg-black/40 p-3 rounded border border-gray-800 flex justify-between items-center font-mono text-cs-green my-1">
        <span className="break-all">{cheat.command}</span>
        <button 
          onClick={handleCopy}
          className="p-2 hover:bg-gray-700 rounded transition-colors text-white ml-2"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      <p className="text-gray-400 text-sm leading-6">
        {cheat.description}
      </p>
    </div>
  );
};

export default CheatCard;
