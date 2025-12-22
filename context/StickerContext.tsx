import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { STICKERS } from '../constants';

interface StickerContextType {
  collectedIds: string[];
  collectSticker: (id: string) => void;
  clearStickers: () => void; // Added this
  isCollected: (id: string) => boolean;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  totalStickers: number;
}

const StickerContext = createContext<StickerContextType | undefined>(undefined);

export const StickerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [collectedIds, setCollectedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('yz_stickers');
    return saved ? JSON.parse(saved) : [];
  });
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('yz_stickers', JSON.stringify(collectedIds));
  }, [collectedIds]);

  const collectSticker = (id: string) => {
    if (!collectedIds.includes(id)) {
      setCollectedIds(prev => [...prev, id]);
    }
  };

  // Function to clear all stickers
  const clearStickers = () => {
    setCollectedIds([]);
    localStorage.removeItem('yz_stickers');
  };

  const isCollected = (id: string) => collectedIds.includes(id);

  return (
    <StickerContext.Provider value={{ 
      collectedIds, 
      collectSticker, 
      clearStickers, // Exposed here
      isCollected,
      isDrawerOpen,
      setDrawerOpen,
      totalStickers: STICKERS.length
    }}>
      {children}
    </StickerContext.Provider>
  );
};

export const useStickers = (): StickerContextType => {
  const context = useContext(StickerContext);
  if (!context) throw new Error('useStickers must be used within StickerProvider');
  return context;
};