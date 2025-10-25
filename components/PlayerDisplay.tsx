
import React from 'react';
import { CardType } from '../types';
import Card from './Card';

interface PlayerDisplayProps {
  playerName: string;
  deckCount: number;
  activeCard: CardType | null;
  keys: string[];
  shuffleKey: string;
  hasError: boolean;
  countdown: number | null;
}

const PlayerDisplay: React.FC<PlayerDisplayProps> = ({ playerName, deckCount, activeCard, keys, shuffleKey, hasError, countdown }) => {
  const keyMappings = React.useMemo(() => {
    if (!activeCard) return {};
    return Object.fromEntries(
      activeCard.map((icon, index) => [icon.name, keys[index].toUpperCase()])
    );
  }, [activeCard, keys]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold text-slate-700">{playerName}</h2>
      <div className="flex items-center space-x-4 relative">
        {hasError && (
          <div className="absolute -top-36 left-1/2 -translate-x-1/2 bg-yellow-300 border-2 border-yellow-500 text-yellow-800 font-bold px-4 py-2 rounded-lg shadow-lg z-10 w-56 text-center">
            <p className="text-xl animate-pulse">ESCOLHA ERRADA!</p>
            {countdown !== null && (
               <p className="text-6xl mt-1 font-mono">{countdown}</p>
            )}
          </div>
        )}
        <div className="relative">
          <Card isPlaceholder={true} card={null} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-black text-slate-600">
            {deckCount}
          </div>
        </div>
        <Card card={activeCard} keyMappings={keyMappings} />
      </div>
      <div className="text-center text-slate-500 font-semibold">
        <p>Use as teclas {keys.join(', ').toUpperCase()} para jogar.</p>
        <p>Pressione [{shuffleKey.toUpperCase()}] para embaralhar.</p>
      </div>
    </div>
  );
};

export default PlayerDisplay;
