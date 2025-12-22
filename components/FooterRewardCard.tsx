import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SOCIAL_LINKS, ICONS } from '../constants';

const FooterRewardCard: React.FC = () => {
  const { t } = useLanguage();

  // Helper to get localized social labels
  const getSocialLabel = (id: string, type: 'label' | 'desc') => t(`reward.${id}.${type}`);

  // Helper to map ID to Icon
  const getIcon = (id: string) => {
    switch(id) {
      case 'email': return ICONS.EMAIL;
      case 'linkedin': return ICONS.LINKEDIN;
      case 'instagram': return ICONS.INSTAGRAM;
      default: return null;
    }
  };

  return (
    <footer className="relative py-24 px-6 overflow-hidden bg-halftone">
      <div className="relative max-w-4xl mx-auto bg-slate-900 border-4 border-slate-900 rounded-none p-8 md:p-12 shadow-comic-lg transform rotate-1">
        
        {/* Comic Background accent */}
        <div className="absolute inset-0 bg-pop-purple mix-blend-overlay opacity-20 pointer-events-none" />
        
        {/* Rarity Tag */}
        <div className="inline-block px-4 py-1 bg-pop-pink text-white text-sm font-marker uppercase tracking-wider mb-6 border-2 border-slate-900 shadow-comic -rotate-2">
          {t('reward.tag')}
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase italic" style={{ textShadow: '4px 4px 0 #000' }}>
          {t('reward.title')}
        </h2>
        <p className="text-slate-300 mb-10 text-lg font-medium font-mono border-s-4 border-pop-yellow ps-4">
          {t('reward.subtitle')}
        </p>

        {/* Chips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="relative flex flex-col items-center justify-center p-6 bg-white border-4 border-slate-900 hover:bg-pop-yellow hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] transition-all duration-200 group/chip text-slate-900"
            >
                {/* Icon */}
                <div className="mb-3 w-10 h-10 text-slate-900 group-hover/chip:scale-110 transition-transform">
                    {getIcon(link.id)}
                </div>

              <div className="text-xl font-black font-sans uppercase">
                {getSocialLabel(link.id, 'label')}
              </div>
              <div className="text-xs text-slate-600 font-bold mt-1 font-mono uppercase tracking-tight">
                {getSocialLabel(link.id, 'desc')}
              </div>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default FooterRewardCard;