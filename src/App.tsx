import React, { useState } from 'react';
import SnakeGame from './components/SnakeGame';
import MusicPlayer from './components/MusicPlayer';
import { Terminal } from 'lucide-react';

export default function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-digital selection:bg-fuchsia-500 selection:text-black overflow-hidden relative screen-tear">
      <div className="static-noise"></div>
      <div className="scanlines"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        
        {/* Header */}
        <header className="flex items-center justify-between mb-12 pb-4 border-b-4 border-fuchsia-500">
          <div className="flex items-center gap-6">
            <div className="p-2 bg-black border-2 border-cyan-400 glitch-border">
              <Terminal className="w-12 h-12 text-fuchsia-500" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-digital tracking-widest text-cyan-400 glitch-text" data-text="SYS.SNAKE_EXE">
                SYS.SNAKE_EXE
              </h1>
              <p className="text-xl text-fuchsia-500 tracking-[0.3em] mt-2">STATUS: ONLINE // AWAITING_INPUT</p>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <p className="text-2xl text-fuchsia-500 tracking-widest mb-1">DATA_YIELD</p>
            <div 
              className="text-7xl md:text-8xl font-digital text-cyan-400 glitch-text tracking-widest"
              data-text={score.toString().padStart(5, '0')}
            >
              {score.toString().padStart(5, '0')}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col xl:flex-row items-center justify-center gap-16 xl:gap-32">
          
          {/* Left/Top: Game Area */}
          <div className="w-full max-w-[600px] flex flex-col items-center">
            <div className="w-full flex justify-between text-2xl text-fuchsia-500 mb-2 px-2 tracking-widest border-b-2 border-cyan-400/50 pb-2">
              <span>[WASD/ARROWS]:_NAVIGATE</span>
              <span>[SPACE]:_HALT</span>
            </div>
            <SnakeGame onScoreChange={setScore} />
          </div>

          {/* Right/Bottom: Music Player */}
          <div className="w-full max-w-lg flex flex-col items-center xl:items-start">
            <div className="mb-6 text-center xl:text-left border-l-8 border-cyan-400 pl-6">
              <h2 className="text-5xl font-digital text-fuchsia-500 glitch-text mb-2" data-text="AUDIO_SUBSYSTEM">AUDIO_SUBSYSTEM</h2>
              <p className="text-cyan-400 text-2xl tracking-widest">STREAMING_SYNTHETIC_WAVES</p>
            </div>
            <MusicPlayer />
          </div>

        </main>
      </div>
    </div>
  );
}
