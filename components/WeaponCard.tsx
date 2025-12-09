import React from 'react';
import { Weapon } from '../types';
import { Target, Zap, Activity, Shield, Crosshair } from 'lucide-react';

interface WeaponCardProps {
  weapon: Weapon;
}

const WeaponCard: React.FC<WeaponCardProps> = ({ weapon }) => {
  return (
    <div className="group relative bg-[#252529] border border-gray-700 rounded-xl overflow-hidden mb-6 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-cs-accent/50">
      
      {/* Header / Image Section */}
      <div className="relative h-48 w-full bg-gradient-to-b from-gray-800 to-[#252529]">
        <img 
          src={weapon.image} 
          alt={weapon.name} 
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#252529] via-transparent to-black/30"></div>
        
        {/* Team Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-black tracking-wider flex items-center gap-1 shadow-lg backdrop-blur-sm border ${
          weapon.team === 'T' ? 'bg-cs-red/80 border-red-500 text-white' : 
          weapon.team === 'CT' ? 'bg-cs-blue/80 border-blue-500 text-white' : 
          'bg-purple-600/80 border-purple-400 text-white'
        }`}>
          {weapon.team === 'T' ? <Crosshair className="w-3 h-3" /> : weapon.team === 'CT' ? <Shield className="w-3 h-3" /> : null}
          {weapon.team === 'T' ? 'TERRORIST' : weapon.team === 'CT' ? 'COUNTER-TERRORIST' : 'ALL TEAMS'}
        </div>

        {/* Price Tag */}
        <div className="absolute top-3 left-3 bg-black/80 text-cs-green border border-cs-green/30 px-3 py-1 rounded font-mono text-sm font-bold shadow-[0_0_10px_rgba(0,255,0,0.2)]">
          {weapon.price}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5 relative">
        <h3 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-cs-accent transition-colors">
          {weapon.name}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 leading-6 border-r-2 border-cs-gray pr-3">
          {weapon.description}
        </p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-4">
          
          {/* Damage */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-400">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-red-500" />
                <span>Damage</span>
              </div>
              <span className="text-red-400">{weapon.damage} / 100</span>
            </div>
            <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-red-900 to-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]" 
                style={{ width: `${weapon.damage}%` }}
              ></div>
            </div>
          </div>

          {/* Recoil */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-400">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-yellow-500" />
                <span>Recoil Control</span>
              </div>
              <span className="text-yellow-400">{weapon.recoil} / 100</span>
            </div>
            <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-yellow-900 to-yellow-500 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.5)]" 
                style={{ width: `${weapon.recoil}%` }}
              ></div>
            </div>
          </div>

          {/* Fire Rate */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-500" />
                <span>Fire Rate</span>
              </div>
              <span className="text-blue-400">{weapon.fireRate} / 100</span>
            </div>
            <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-blue-900 to-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
                style={{ width: `${weapon.fireRate}%` }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WeaponCard;
