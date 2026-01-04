import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';
import { STICKERS, PROJECTS, ICONS } from '../constants';
import Sticker from '../components/Sticker';
import SvgGsapExample from '@/components/SvgGsapExample';
import SvgHome from '@/components/SvgHome';

const Home: React.FC = () => {
    const { t, getLocalized } = useLanguage();
    const navigate = useNavigate();
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

    const handleProjectClick = (slug: string) => {
        trackEvent(
            'click',
            'project_card',
            slug
        );
        navigate(`/project/${slug}`);
    };
    const homeStickers = STICKERS.filter(s => (s as any).page === 'home');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, '');

    return (
        <div className="pt-24 min-h-screen overflow-x-hidden relative bg-slate-950">
            {/* --- STICKER LAYER --- */}
            {homeStickers.map((sticker) => (
                <Sticker key={sticker.id} data={sticker} />
            ))}

            {/* --- HERO SECTION --- */}
            <section className="relative px-6 md:px-12 mb-20 md:mb-28 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                {/* Left: Text Content */}
                <div class="flex-1 z-10 text-center md:text-start md:rtl:text-right relative">
                    <span class="font-marker text-start text-white text-[1.5em] block relative ltr:right-5 rtl:left-5 [@media(max-width:750px)]:right-0 [@media(max-width:750px)]:left-0">
                        {t('hero.intro')}
                    </span>

                    <h1 class="font-black leading-[0.9] uppercase italic relative ltr:tracking-tighter m-0 text-[#fde82b] text-[8em]  [@media(max-width:480px)]:text-[5em] rtl:bottom-[0.1em]">
                        {t('hero.name')}
                    </h1>

                    <span class="font-marker m-0 text-white  block text-[1.5em] relative ltr:text-right rtl:text-left rtl:max-w-[16em]  [@media(max-width:750px)]:text-center">
                        {t('hero.end')}
                    </span>

                </div>

                {/* Right: Abstract Tech/Graffiti Visual */}
                <div className="flex-1 relative w-full h-80 md:h-[500px] md:flex items-center justify-center">
                    <SvgHome />
                </div>
            </section>


            {/* --- PROJECTS GRID SECTION --- */}
            <section className="px-6 md:px-0 mb-32">
                <div className="px-6 md:px-12 mb-8 flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="bg-pop-pink text-white w-12 h-12 flex items-center justify-center font-black text-2xl border-4 border-slate-900 shadow-comic">
                        #
                    </div>
                    <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter" style={{ textShadow: '2px 2px 0 #000' }}>
                        {t('projects.title')}
                    </h2>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex h-[600px] w-full bg-slate-950 border-y-4 border-slate-900 overflow-hidden">
                    {PROJECTS.map((project) => {
                        const isActive = activeProjectId === project.id;
                        return (
                            <div
                                key={project.id}

                                onMouseEnter={() => { setActiveProjectId(project.id); trackEvent('hover', 'project_card_focus', project.slug); }}
                                onMouseLeave={() => setActiveProjectId(null)}
                                className={`
                            relative h-full transition-all duration-500 ease-out cursor-pointer border-r-4 border-slate-900 last:border-r-0 overflow-hidden group
                            ${isActive ? 'flex-[3]' : 'flex-1'}
                        `}
                                onClick={() => handleProjectClick(project.slug)}
                            >
                                {/* Background Image & Overlay */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${(import.meta as any).env.BASE_URL}${project.coverImage})` }}
                                />
                                <div className={`absolute inset-0 bg-halftone mix-blend-multiply transition-opacity duration-300 ${isActive ? 'opacity-20' : 'opacity-80'}`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                                {/* Content */}
                                <div className={`absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col justify-end transition-all duration-300 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                                    <div className="inline-block bg-pop-blue border-2 border-slate-900 px-2 text-xs font-bold uppercase mb-2 self-start transform -rotate-1 shadow-sm">
                                        {getLocalized(project.tag)}
                                    </div>

                                    <h3 className="text-4xl font-black text-white leading-none uppercase italic mb-2" style={{ textShadow: '3px 3px 0 #000' }}>
                                        {getLocalized(project.name)}
                                    </h3>

                                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-white font-medium bg-slate-900/80 p-4 border-s-4 border-pop-yellow text-sm mb-4">
                                            {getLocalized(project.shortDescription)}
                                        </p>
                                        <button
                                            onFocus={() => { setActiveProjectId(project.id); trackEvent('hover', 'project_card_focus', project.slug); console.log('focused'); }}
                                            onBlur={() => setActiveProjectId(null)}
                                            className="bg-pop-yellow text-slate-900 px-6 py-3 text-lg font-black font-marker uppercase tracking-wider hover:bg-white hover:scale-105 focus:bg-white focus:scale-105 transition-all border-4 border-slate-900 shadow-[4px_4px_0px_#000]">
                                            {t('projects.view_btn')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col gap-6 px-2">
                    {PROJECTS.map((project) => {
                        const isExpanded = activeProjectId === project.id;
                        return (
                            <div
                                key={project.id}
                                onClick={() => { setActiveProjectId(isExpanded ? null : project.id); trackEvent('click', 'project_card_focus', project.slug); }}
                                className={`
                            relative rounded-sm overflow-hidden border-4 border-slate-900 transition-all duration-300 shadow-comic
                            ${isExpanded ? 'h-[450px]' : 'h-60'}
                        `}
                            >
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${(import.meta as any).env.BASE_URL}${project.coverImage})` }} />
                                <div className="absolute inset-0 bg-slate-900/40 bg-halftone mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                                    <div className="bg-pop-blue text-slate-900 text-xs font-bold px-2 border-2 border-slate-900 mb-2 transform -rotate-1">
                                        {getLocalized(project.tag)}
                                    </div>
                                    <h3 className="text-2xl font-black text-white italic uppercase shadow-black drop-shadow-md mb-2">
                                        {getLocalized(project.name)}
                                    </h3>

                                    {isExpanded && (
                                        <div className="mt-4 animate-fadeIn w-full">
                                            <p className="bg-slate-900/90 text-white p-3 text-sm mb-4 border-s-4 border-pop-yellow font-medium">
                                                {getLocalized(project.shortDescription)}
                                            </p>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleProjectClick(project.slug); }}
                                                className="w-full bg-pop-yellow text-slate-900 py-3 font-black font-marker uppercase border-2 border-slate-900 shadow-[4px_4px_0px_#000]"
                                            >
                                                {t('projects.view_btn')}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* --- ABOUT SECTION --- */}
            <section className="px-6 md:px-12 max-w-5xl mx-auto mb-32 relative">
                <div className="bg-white text-slate-900 p-8 md:p-12 border-4 border-slate-900 shadow-comic-lg transform -rotate-1">
                    <div className="absolute -top-6 left-1/2 w-max -translate-x-1/2 bg-pop-pink text-white px-6 py-2 text-2xl font-marker border-4 border-slate-900 transform rotate-1 shadow-comic">
                        {t('about.title')}
                    </div>

                    <div className="space-y-6 text-lg md:text-xl font-bold leading-relaxed mt-4 font-sans">
                        <p>

                            {t('about.p1').split("<br>").map((line, i) => (
                                <span key={i}>
                                    {line}
                                    <br />
                                </span>
                            ))}</p>
                    </div>

                    {/* Decorative Hand Doodle */}
                    <div className="absolute -bottom-10 -right-10 text-8xl hidden md:block transform rotate-12 drop-shadow-lg">
                        ✌️
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;