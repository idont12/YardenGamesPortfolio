import React from 'react';
import { useStickers } from '../context/StickerContext';
import { useLanguage } from '../context/LanguageContext';
import { STICKERS, ICONS } from '../constants';

const StickerDrawer: React.FC = () => {
  const { isDrawerOpen, setDrawerOpen, clearStickers, collectedIds } = useStickers();
  const { t, getLocalized } = useLanguage();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} />

      {/* Notebook Style Container */}
      <div className="relative w-full max-w-3xl h-[80vh] md:h-auto overflow-y-auto bg-[#fffdf0] text-slate-900 rounded-sm p-8 border-4 border-slate-900 shadow-[15px_15px_0px_rgba(0,0,0,1)] transform rotate-1 animate-[bounce_0.3s_ease-out]">

        {/* Lined Paper Background CSS */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px)',
            backgroundSize: '100% 2rem',
            marginTop: '4rem'
          }}
        />
        <div className="absolute left-12 top-0 bottom-0 w-1 bg-red-400/30 z-0 hidden md:block" />

        <button
          onClick={() => setDrawerOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold hover:bg-pop-pink transition-colors z-20 border-2 border-white shadow-md"
        >
          <div className="w-5 h-5">{ICONS.CLOSE}</div>
        </button>

        <div className="relative z-10">
          <h2 className="text-4xl font-marker text-center mb-1 text-slate-900 transform -rotate-2 drop-shadow-sm">
            {t('stickers.title')}
          </h2>

          <div className="flex justify-between items-start flex-wrap gap-2 mb-8">
            <p className="text-center font-mono text-slate-500 border-b-2 border-slate-900 border-dashed inline-block px-4 pb-1">
              {t('stickers.count')} {collectedIds.length} / {STICKERS.length}
            </p>

            {/* Clear Button - Shows up when there are stickers collected */}
            {collectedIds.length >= STICKERS.length && (
              <button
                onClick={() => {
                  if (window.confirm("Clear all stickers?")) clearStickers();
                }}
                className="bg-pop-pink text-white px-4 py-1 text-xs font-bold border-2 border-slate-900 shadow-comic hover:bg-red-500 transition-colors"
              >
                {t('stickers.resat')}
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 px-4 md:px-12 pb-8">
            {STICKERS.map((sticker) => {
              const isUnlocked = collectedIds.includes(sticker.id);
              return (
                <div key={sticker.id} className="flex flex-col items-center text-center group">
                  {/* Sticker Slot */}
                  <div className={`
                              w-28 h-28 flex items-center justify-center mb-3 relative transition-transform duration-300
                              ${isUnlocked ? 'rotate-2' : 'bg-slate-200/50 border-4 border-slate-300 border-dashed'}
                          `}>
                    {isUnlocked ? (
                      <div className="relative drop-shadow-2xl">
                        <div className="absolute inset-0 bg-white rounded-full opacity-0 blur-md group-hover:opacity-60 transition-opacity" />
                        <img src={sticker.src} alt="sticker" className="w-30 h-30 relative z-10" />
                      </div>
                    ) : (
                      <div className="text-slate-300 w-12 h-12">
                        {ICONS.QUESTION_MARK}
                      </div>
                    )}
                  </div>

                  {isUnlocked ? (
                    <div className="bg-white/80 p-2 rounded rotate-[-1deg] shadow-sm border border-slate-200 backdrop-blur-sm bg-[#ffe390]">
                      <h3 className="font-bold text-sm font-marker text-slate-800">{getLocalized(sticker.label)}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-tight ">{getLocalized(sticker.description)}</p>
                    </div>
                  ) : (
                    <div className="h-4 w-16 bg-slate-200 rounded mt-2" />
                  )}
                </div>
              );
            })}
          </div>

          {collectedIds.length === 0 && (
            <div className="text-center mt-8 p-6 bg-yellow-100 rounded-sm border-2 border-slate-900 font-marker text-slate-800 rotate-1 max-w-sm mx-auto shadow-comic">
              {t('stickers.empty')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StickerDrawer;