import React from 'react';
import { GameBug } from '../types';
import { AlertTriangle, Map, BarChart } from 'lucide-react';

interface BugCardProps {
  bug: GameBug;
}

const BugCard: React.FC<BugCardProps> = ({ bug }) => {
  const difficultyColor = 
    bug.difficulty === 'Easy' ? 'text-green-400' :
    bug.difficulty === 'Medium' ? 'text-yellow-400' :
    'text-red-500';

  return (
    <div className="bg-gradient-to-br from-cs-gray/10 to-transparent border border-cs-gray p-4 rounded-lg mb-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-cs-accent/50"></div>
      
      <div className="flex justify-between items-start mb-2 pl-2">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-cs-accent" />
          {bug.title}
        </h3>
      </div>

      <div className="flex gap-4 mb-3 text-xs pl-2">
        <div className={`flex items-center gap-1 ${difficultyColor}`}>
          <BarChart className="w-3 h-3" />
          <span>سختی: {bug.difficulty}</span>
        </div>
        {bug.map && (
          <div className="flex items-center gap-1 text-blue-400">
            <Map className="w-3 h-3" />
            <span>مپ: {bug.map}</span>
          </div>
        )}
      </div>

      <p className="text-gray-300 text-sm leading-relaxed pl-2 border-r-2 border-gray-700 pr-3">
        {bug.description}
      </p>
    </div>
  );
};

export default BugCard;
