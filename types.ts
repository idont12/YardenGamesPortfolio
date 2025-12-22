export type Language = 'en' | 'he';

export interface LocalizedString {
  en: string;
  he: string;
}

export interface LocalizedContent<T> {
  en: T;
  he: T;
}

export interface SocialLink {
  id: string;
  type: 'email' | 'linkedin' | 'instagram';
  url: string;
}

export interface GalleryItem {
  type: 'image' | 'video';
  src?: string; // For images
  alt?: string;
  embedHtml?: string; // For videos
}

export type ProjectLink = {
  url: string;
  label: LocalizedString; // must be { en, he } exactly like your constants
};

export interface Project {
  id: string;
  slug: string;
  name: LocalizedString;
  shortTagline: LocalizedString;
  shortDescription: LocalizedString;
  tag: LocalizedString;
  purpose: LocalizedString;
  timeSpent: LocalizedString;
  role: LocalizedString;
  workSummary: LocalizedContent<string[]>;
  whatIDid: LocalizedContent<string[]>;
  technologies: string[];
  difficulty: number; // 1-5
  xpGain: number;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  accentColor: string;
  coverImage: string;
  projectLink:ProjectLink;
  gallery: GalleryItem[];
  contentHtml: LocalizedString;
}

export interface Sticker {
  id: string;
  src: string; // URL to image/svg
  label: LocalizedString; // Name of sticker
  description: LocalizedString; // Fun lore text
  x: string; // CSS left %
  y: string; // CSS top %
  page: PageLocation;
  rotation: number; // Initial rotation deg
}

export type PageLocation = 'home' | 'maccabiah-on-time' | 'screen-breaker-xp' | 'number-club'|'hex-shade' |'other' ; 

export interface TranslationMap {
  [key: string]: LocalizedString | string;
}