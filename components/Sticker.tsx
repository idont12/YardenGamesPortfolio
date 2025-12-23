import React, { useState, useRef } from 'react';
import { Sticker as StickerType } from '../types';
import { useStickers } from '../context/StickerContext';
import { useLanguage } from '../context/LanguageContext';

interface StickerProps {
  data: StickerType;
}

const Sticker: React.FC<StickerProps> = ({ data }) => {
  const { collectSticker, isCollected } = useStickers();
  const collected = isCollected(data.id);
  const [isFlying, setIsFlying] = useState(false);
  const [flyTarget, setFlyTarget] = useState({ x: 0, y: 0 });
  const stickerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (collected || isFlying) return;
    
    // Find the Backpack icon in the Navbar
    const backpackElement = document.querySelector('[title="Sticker Collection"]');
    const stickerElement = stickerRef.current;

    if (backpackElement && stickerElement) {
        const backpackRect = backpackElement.getBoundingClientRect();
        const stickerRect = stickerElement.getBoundingClientRect();

        // Calculate the relative movement
        setFlyTarget({
            x: backpackRect.left - stickerRect.left + (backpackRect.width / 2) - (stickerRect.width / 2),
            y: backpackRect.top - stickerRect.top + (backpackRect.height / 2) - (stickerRect.height / 2)
        });
    } else {
        // Fallback if backpack isn't found
        setFlyTarget({ x: 0, y: -window.innerHeight });
    }
    
    setIsFlying(true);
    
    // Wait for the CSS transition (700ms) before removing from DOM
    setTimeout(() => {
        collectSticker(data.id);
        setIsFlying(false);
    }, 700);
  };

  // If it's already in the collection and not currently mid-animation, don't show it
  if (collected && !isFlying) return null;

  return (
    <div 
        ref={stickerRef}
        onClick={handleClick}
        className={`
            absolute z-[100] cursor-pointer select-none
            ${isFlying ? 'pointer-events-none' : 'animate-float hover:scale-110'}
        `}
        style={{ 
            left: data.x, 
            top: data.y,
            // We use a single transition property for all transform changes
            transition: isFlying ? 'transform 0.7s cubic-bezier(0.45, 0, 0.55, 1), opacity 0.5s ease-in' : 'transform 0.2s ease-out',
            transform: isFlying 
                ? `translate(${flyTarget.x}px, ${flyTarget.y}px) rotate(720deg) scale(0.2)` 
                : `rotate(${data.rotation}deg)`,
            opacity: isFlying ? 0 : 1
        }}
    >
        {/* Glow / Particle Effect during flight */}
        {isFlying && (
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-pop-yellow rounded-full animate-ping opacity-100" />
                <div className="absolute w-24 h-24 bg-white rounded-full blur-xl opacity-40 animate-pulse" />
            </div>
        )}

        {/* The Sticker Visual */}
        <div className="relative group">
             {/* Sticker Outline/Border */}
             <div className="absolute inset-0 bg-white rounded-full scale-110 blur-[2px] opacity-60 group-hover:opacity-100 transition-opacity" />
             
             <div className="relative overflow-hidden">
                 <img 
                    src={`${(import.meta as any).env.BASE_URL}${data.src}`} 
                    alt="Sticker" 
                    className="w-20 h-20 pointer-events-none object-contain" 
                 />
             </div>
             
             {/* Tooltip - Hidden when flying */}
             {!isFlying && (
                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-pop-pink text-white text-[10px] font-black px-2 py-1 border-2 border-slate-950 whitespace-nowrap shadow-[3px_3px_0px_#000] transform -rotate-2">
                        {t('stickers.collectAction')}
                    </div>
                 </div>
             )}
        </div>
    </div>
  );
};

export default Sticker;