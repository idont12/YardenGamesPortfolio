import React, { useEffect, useState } from 'react';

interface IntroLoaderProps {
  onFinished: () => void;
}

const AlchemistLoader: React.FC<IntroLoaderProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // The "Baked" path from your SVG (Calculated with your matrix offsets)
  const customShapePath = "M20.208,268.51C20.208,268.51 43.753,174.265 195.677,164.211C429.011,148.769 356.925,397.43 356.925,397.43C356.925,397.43 341.307,327.425 261.621,327.425C181.936,327.425 192.341,398.174 192.341,398.174C192.341,398.174 173.722,328.915 110.421,329.659C36.921,330.524 -8.611,490.744 117.72,501.989C419.639,522.731 554.249,406.504 485.065,171.265C434.374,-1.096 203.673,-14.787 43.7,73.98";

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(onFinished, 900);
      }, 1200);
    }
  }, [progress, onFinished]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden transition-all duration-1000 ease-in-out ${isExiting ? 'opacity-0 scale-110' : 'opacity-100'}`}>
      
      {/* BACKGROUND: HALFTONE & SCANLINES */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_0)] bg-[length:6px_6px]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]" />

      <div className="relative flex items-center justify-center w-[450px] h-[450px]">
        
        {/* FMA-STYLE ALCHEMIST CIRCLES */}
        <svg className="absolute inset-0 w-full h-full rotate-[-45deg]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2, 4" className="animate-[spin_20s_linear_infinite]" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="#334155" strokeWidth="1" />
          <circle 
            cx="50" cy="50" r="44" 
            fill="none" 
            stroke="#00ffff" 
            strokeWidth="1.5" 
            strokeDasharray="276"
            strokeDashoffset={276 - (276 * progress) / 100}
            className="transition-all duration-500 ease-out shadow-[0_0_15px_#00ffff]"
          />
          {/* Internal Geometric Runes */}
          <path d="M50 6 L94 75 L6 75 Z" fill="none" stroke="#1e293b" strokeWidth="0.5" className="animate-[spin_15s_linear_infinite_reverse] origin-center" />
        </svg>

        {/* CENTER SHAPE: SPIDER-VERSE GLITCH EFFECT */}
        <div className="relative w-64 h-64">
            {/* Layers for Chromatic Aberration */}
            {[
                { color: '#00ffff', offset: '-2px, -1px' }, // Cyan
                { color: '#ff0055', offset: '2px, 1px' },  // Magenta
                { color: '#ffffff', offset: '0px, 0px' }   // Main White
            ].map((layer, i) => (
                <svg 
                    key={i}
                    viewBox="-50 -50 624 625" 
                    className={`absolute inset-0 transition-opacity duration-300 ${progress > 10 ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                        transform: progress === 100 ? `translate(${layer.offset})` : 'none',
                        mixBlendMode: 'screen'
                    }}
                >
                    <path
                        d={customShapePath}
                        fill="none"
                        stroke={layer.color}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray="2500" // Length of your custom path
                        strokeDashoffset={2500 - (2500 * progress) / 100}
                        className="transition-all duration-300 ease-linear"
                    />
                </svg>
            ))}
        </div>

        {/* TECH TEXT OVERLAY */}
        <div className="absolute bottom-4 flex flex-col items-center">
            <div className="text-[10px] font-mono tracking-[0.4em] text-cyan-500/50 uppercase mb-2 animate-pulse">
                Neural_Link // Established
            </div>
            <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black italic text-white tracking-tighter">
                    {progress}<span className="text-xl not-italic opacity-50">%</span>
                </span>
            </div>
        </div>
      </div>

      {/* FLASH OVERLAY ON FINISH */}
      <div className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-300 ${progress === 100 && !isExiting ? 'opacity-10' : 'opacity-0'}`} />
    </div>
  );
};

export default AlchemistLoader;