
import React from 'react';
import { CardType } from '../types';

interface CardProps {
  card: CardType | null;
  keyMappings?: Record<string, string>;
  isPlaceholder?: boolean;
}

const Card: React.FC<CardProps> = ({ card, keyMappings, isPlaceholder = false }) => {
  if (isPlaceholder || !card) {
    return (
      <div className="w-48 h-64 md:w-56 md:h-80 bg-white/50 border-2 border-dashed border-slate-400 rounded-xl flex items-center justify-center">
        <span className="text-slate-500">Deck</span>
      </div>
    );
  }

  return (
    <div className="w-48 h-64 md:w-56 md:h-80 bg-white p-3 shadow-lg rounded-xl grid grid-cols-2 grid-rows-3 gap-2">
      {card.map((icon, index) => (
        <div 
          key={icon.name} 
          className={`flex flex-col items-center justify-center ${index === 4 ? 'col-span-2' : ''}`}
        >
          {icon.component}
          {keyMappings && keyMappings[icon.name] && (
            <span className="mt-1 font-bold text-lg text-slate-800 bg-slate-200 rounded-md px-2 py-0.5">
              {keyMappings[icon.name]}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
