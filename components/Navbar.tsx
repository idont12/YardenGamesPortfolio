import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useStickers } from '../context/StickerContext';
import { ICONS } from '../constants';

const Navbar: React.FC = () => {
  const { setDrawerOpen, collectedIds } = useStickers();

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-16 flex items-center justify-between px-6 md:px-12 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <Link to="/" className="group flex items-center space-x-2">
        <div className="w-8 h-8 bg-slate-800 border-2 border-slate-900 flex items-center justify-center group-hover:bg-pop-blue group-hover:text-slate-950 transition-all duration-300 transform group-hover:rotate-12 shadow-comic">
          <span className="font-marker font-bold text-pop-blue group-hover:text-slate-900 text-sm">YZ</span>
        </div>
      </Link>
      
      <div className="flex items-center space-x-4">
        {/* Sticker Bag Button */}
        <button 
            onClick={() => setDrawerOpen(true)}
            className="relative p-2 group hover:scale-110 transition-transform"
            title="Sticker Collection"
        >
            <div className="text-white w-6 h-6 group-hover:text-pop-yellow transition-colors drop-shadow-md">
              {ICONS.BACKPACK}
            </div>
            {collectedIds.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-pop-pink text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-slate-950 animate-bounce">
                    {collectedIds.length}
                </span>
            )}
        </button>

        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;