
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GameStatus, CardType, HighScores } from './types';
import { ICONS, PLAYER_1_KEYS, PLAYER_2_KEYS, DECK_SIZE, BACKGROUNDS, PLAYER_1_SHUFFLE_KEY, PLAYER_2_SHUFFLE_KEY } from './constants';
import Card from './components/Card';
import PlayerDisplay from './components/PlayerDisplay';

// --- HELPER FUNCTIONS ---
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const createRandomCard = (): CardType => shuffleArray(ICONS).slice(0, 5);
const createDeck = (): CardType[] => Array.from({ length: DECK_SIZE }, createRandomCard);

// --- UI COMPONENTS ---
const SpeakerOnIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>);
const SpeakerOffIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>);

const IntroScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 4000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-white z-20">
      <h1 className="text-7xl font-bold intro-title">Pensa Rapido</h1>
      <p className="text-3xl mt-4 intro-subtitle">Criado por Ben e Papi</p>
    </div>
  );
};

const HighScoresDisplay: React.FC<{ scores: HighScores }> = ({ scores }) => {
  const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);
  if (sortedScores.length === 0) {
    return <p className="text-slate-500">Nenhuma vitória ainda!</p>;
  }
  return (
    <ol className="list-decimal list-inside space-y-1">
      {sortedScores.slice(0, 5).map(([name, score]) => (
        <li key={name} className="text-lg">
          <span className="font-bold text-slate-700">{name}:</span> {score} vitórias
        </li>
      ))}
    </ol>
  );
};

const SetupScreen: React.FC<{ 
  onStartGame: (p1: string, p2: string, bg: number) => void; 
  highScores: HighScores;
  knownPlayers: string[];
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}> = ({ onStartGame, highScores, knownPlayers, isMusicPlaying, toggleMusic }) => {
  const [p1Name, setP1Name] = useState("Jogador 1");
  const [p2Name, setP2Name] = useState("Jogador 2");
  const [selectedBg, setSelectedBg] = useState(0);

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row gap-8">
      <button onClick={toggleMusic} className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 z-20" aria-label={isMusicPlaying ? "Pausar música" : "Tocar música"}>
        {isMusicPlaying ? <SpeakerOnIcon /> : <SpeakerOffIcon />}
      </button>

      <div className="flex-1">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">Configurar Jogo</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-slate-600">Nome Jogador 1</label>
            <input type="text" list="knownPlayers" value={p1Name} onChange={e => setP1Name(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md" />
          </div>
          <div>
            <label className="block text-lg font-semibold text-slate-600">Nome Jogador 2</label>
            <input type="text" list="knownPlayers" value={p2Name} onChange={e => setP2Name(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md" />
          </div>
          <datalist id="knownPlayers">
            {knownPlayers.map(name => <option key={name} value={name} />)}
          </datalist>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-600 mb-2">Escolha o Cenário</h3>
          <div className="grid grid-cols-5 gap-2">
            {BACKGROUNDS.map((bg, index) => (
              <img key={index} src={bg} onClick={() => setSelectedBg(index)} className={`w-full h-16 object-cover rounded-md cursor-pointer transition-all ${selectedBg === index ? 'ring-4 ring-blue-500' : 'hover:scale-105'}`} alt={`Fundo ${index + 1}`} />
            ))}
          </div>
        </div>
        <button onClick={() => onStartGame(p1Name, p2Name, selectedBg)} className="mt-8 w-full bg-blue-600 text-white text-2xl font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
          Iniciar Jogo
        </button>
      </div>
      <div className="flex-1 lg:border-l lg:pl-8 border-slate-200">
        <h2 className="text-4xl font-bold text-slate-800 mb-6">High Scores</h2>
        <HighScoresDisplay scores={highScores} />
      </div>
    </div>
  );
};

const GameOverlay: React.FC<{ status: GameStatus; onRestart: () => void; winnerName: string | null; }> = ({ status, onRestart, winnerName }) => {
  if (status !== GameStatus.Player1Wins && status !== GameStatus.Player2Wins) return null;
  const title = winnerName ? `${winnerName} Venceu!` : "Fim de Jogo";
  return (
    <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-10">
      <div className="bg-white p-10 rounded-xl shadow-2xl text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-6">{title}</h1>
        <button onClick={onRestart} className="bg-blue-600 text-white text-2xl font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors transform hover:scale-105">
          Jogar Novamente
        </button>
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
function App() {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.Intro);
  const [player1Deck, setPlayer1Deck] = useState<CardType[]>([]);
  const [player2Deck, setPlayer2Deck] = useState<CardType[]>([]);
  const [centerCard, setCenterCard] = useState<CardType | null>(null);
  const [player1Name, setPlayer1Name] = useState("Jogador 1");
  const [player2Name, setPlayer2Name] = useState("Jogador 2");
  const [highScores, setHighScores] = useState<HighScores>({});
  const [knownPlayers, setKnownPlayers] = useState<string[]>([]);
  const [selectedBgIndex, setSelectedBgIndex] = useState(0);
  const [animation, setAnimation] = useState<{ key: number, from: 'left' | 'right' | null }>({ key: 0, from: null });
  
  const [p1Error, setP1Error] = useState(false);
  const [p2Error, setP2Error] = useState(false);
  const [p1Countdown, setP1Countdown] = useState<number | null>(null);
  const [p2Countdown, setP2Countdown] = useState<number | null>(null);

  const turnLock = useRef(false);
  const p1IntervalRef = useRef<number | null>(null);
  const p2IntervalRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  
  // --- Effects ---
  useEffect(() => {
    const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    if (audioElement) {
      audioRef.current = audioElement;
      audioRef.current.volume = 0.3;
    }
    try {
      const storedScores = localStorage.getItem('highScores');
      if (storedScores) setHighScores(JSON.parse(storedScores));
      const storedPlayers = localStorage.getItem('knownPlayers');
      if (storedPlayers) setKnownPlayers(JSON.parse(storedPlayers));
    } catch (e) {
      console.error("Failed to parse data from localStorage", e);
    }
  }, []);

  useEffect(() => {
    if (p1Error) {
      setP1Countdown(5);
      p1IntervalRef.current = window.setInterval(() => {
        setP1Countdown(prev => {
          if (prev === null || prev <= 1) {
            if(p1IntervalRef.current) clearInterval(p1IntervalRef.current);
            setP1Error(false);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (p1IntervalRef.current) clearInterval(p1IntervalRef.current);
    };
  }, [p1Error]);

  useEffect(() => {
    if (p2Error) {
      setP2Countdown(5);
      p2IntervalRef.current = window.setInterval(() => {
        setP2Countdown(prev => {
          if (prev === null || prev <= 1) {
            if(p2IntervalRef.current) clearInterval(p2IntervalRef.current);
            setP2Error(false);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (p2IntervalRef.current) clearInterval(p2IntervalRef.current);
    };
  }, [p2Error]);

  // --- Game Flow & Logic ---
  const updateScores = (winnerName: string) => {
    setHighScores(prevScores => {
      const newScores = { ...prevScores };
      newScores[winnerName] = (newScores[winnerName] || 0) + 1;
      localStorage.setItem('highScores', JSON.stringify(newScores));
      return newScores;
    });
  };

  const startGame = (p1Name: string, p2Name: string, bgIndex: number) => {
    setPlayer1Name(p1Name);
    setPlayer2Name(p2Name);
    setSelectedBgIndex(bgIndex);

    const newKnownPlayers = new Set([...knownPlayers, p1Name, p2Name]);
    const updatedPlayersArray = Array.from(newKnownPlayers);
    setKnownPlayers(updatedPlayersArray);
    localStorage.setItem('knownPlayers', JSON.stringify(updatedPlayersArray));

    const p1Deck = createDeck();
    const p2Deck = createDeck();
    const guaranteedIcons = [p1Deck[0][0], p2Deck[0][0]].filter((v, i, a) => a.findIndex(t => (t.name === v.name)) === i);
    const remainingIcons = shuffleArray(ICONS.filter(icon => !guaranteedIcons.some(gi => gi.name === icon.name)));
    const iconsForCenter = [...guaranteedIcons, ...remainingIcons.slice(0, 5 - guaranteedIcons.length)];
    
    setPlayer1Deck(p1Deck);
    setPlayer2Deck(p2Deck);
    setCenterCard(shuffleArray(iconsForCenter));
    setGameStatus(GameStatus.Playing);
  };
  
  const handleWin = (player: 1 | 2) => {
      const winnerName = player === 1 ? player1Name : player2Name;
      updateScores(winnerName);
      setGameStatus(player === 1 ? GameStatus.Player1Wins : GameStatus.Player2Wins);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (turnLock.current || gameStatus !== GameStatus.Playing) return;

    const key = event.key.toLowerCase();
    const p1ActiveCard = player1Deck[0];
    const p2ActiveCard = player2Deck[0];
    if (!p1ActiveCard || !p2ActiveCard || !centerCard) return;

    const p1KeyIndex = PLAYER_1_KEYS.indexOf(key);
    const p2KeyIndex = PLAYER_2_KEYS.indexOf(key);
    const isP1Shuffle = key === PLAYER_1_SHUFFLE_KEY;
    const isP2Shuffle = key === PLAYER_2_SHUFFLE_KEY;

    if (p1KeyIndex !== -1 || isP1Shuffle) {
        if (p1Error) return;
        
        turnLock.current = true;
        if (isP1Shuffle) {
            setPlayer1Deck(d => [...d.slice(1), d[0]]);
        } else if (centerCard.some(icon => icon.name === p1ActiveCard[p1KeyIndex].name)) {
            const newDeck = player1Deck.slice(1);
            setCenterCard(player1Deck[0]);
            setPlayer1Deck(newDeck);
            setAnimation(prev => ({ key: prev.key + 1, from: 'left' }));
            if (newDeck.length === 0) {
              handleWin(1);
              setTimeout(() => { turnLock.current = false; }, 50);
              return;
            }
        } else {
            setP1Error(true);
        }
        setTimeout(() => { turnLock.current = false; }, 50);

    } else if (p2KeyIndex !== -1 || isP2Shuffle) {
        if (p2Error) return;
        
        turnLock.current = true;
        if (isP2Shuffle) {
            setPlayer2Deck(d => [...d.slice(1), d[0]]);
        } else if (centerCard.some(icon => icon.name === p2ActiveCard[p2KeyIndex].name)) {
            const newDeck = player2Deck.slice(1);
            setCenterCard(player2Deck[0]);
            setPlayer2Deck(newDeck);
            setAnimation(prev => ({ key: prev.key + 1, from: 'right' }));
            if (newDeck.length === 0) {
              handleWin(2);
              setTimeout(() => { turnLock.current = false; }, 50);
              return;
            }
        } else {
            setP2Error(true);
        }
        setTimeout(() => { turnLock.current = false; }, 50);
    }
  }, [gameStatus, player1Deck, player2Deck, centerCard, player1Name, player2Name, p1Error, p2Error]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsMusicPlaying(true)
        }).catch((e) => {
          console.error("Audio play failed:", e)
          setIsMusicPlaying(false)
        });
      }
    }
  };

  // --- Render Logic ---
  if (gameStatus === GameStatus.Intro) {
    return <IntroScreen onFinish={() => setGameStatus(GameStatus.Setup)} />;
  }
  
  const winnerName = gameStatus === GameStatus.Player1Wins ? player1Name : gameStatus === GameStatus.Player2Wins ? player2Name : null;
  const mainContentClass = "relative min-h-screen flex flex-col items-center justify-center p-4 font-sans transition-all duration-500";
  const bgStyle = { 
    backgroundImage: `url(${BACKGROUNDS[selectedBgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className={mainContentClass} style={gameStatus === GameStatus.Playing ? bgStyle : {}}>
      {gameStatus === GameStatus.Playing && (
        <button onClick={toggleMusic} className="absolute top-4 right-4 p-2 rounded-full bg-white/50 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 z-20" aria-label={isMusicPlaying ? "Pausar música" : "Tocar música"}>
          {isMusicPlaying ? <SpeakerOnIcon /> : <SpeakerOffIcon />}
        </button>
      )}

      {gameStatus === GameStatus.Setup ? (
        <SetupScreen 
          onStartGame={startGame} 
          highScores={highScores} 
          knownPlayers={knownPlayers} 
          isMusicPlaying={isMusicPlaying}
          toggleMusic={toggleMusic}
        />
      ) : (
        <>
          <GameOverlay status={gameStatus} onRestart={() => setGameStatus(GameStatus.Setup)} winnerName={winnerName} />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10" style={gameStatus === GameStatus.Playing ? {} : { display: 'none' }}></div>
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-around space-y-8 lg:space-y-0 lg:space-x-8">
            <PlayerDisplay 
              playerName={player1Name} 
              deckCount={player1Deck.length} 
              activeCard={player1Deck.length > 0 ? player1Deck[0] : null} 
              keys={PLAYER_1_KEYS} 
              shuffleKey={PLAYER_1_SHUFFLE_KEY}
              hasError={p1Error}
              countdown={p1Countdown}
             />
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-white mb-2">Carta Central</h3>
              <div key={animation.key} className={animation.from === 'left' ? 'animate-fly-in-left' : animation.from === 'right' ? 'animate-fly-in-right' : ''}>
                <Card card={centerCard} />
              </div>
            </div>
            <PlayerDisplay 
              playerName={player2Name} 
              deckCount={player2Deck.length} 
              activeCard={player2Deck.length > 0 ? player2Deck[0] : null} 
              keys={PLAYER_2_KEYS} 
              shuffleKey={PLAYER_2_SHUFFLE_KEY} 
              hasError={p2Error}
              countdown={p2Countdown}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
