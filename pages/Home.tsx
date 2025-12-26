import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';
import { STICKERS, PROJECTS, ICONS } from '../constants';
import Sticker from '../components/Sticker';

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
            <section className="relative px-6 md:px-12 mb-20 md:mb-32 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">

                {/* Left: Text Content */}
                <div className="flex-1 space-y-8 z-10 text-center md:text-start md:rtl:text-right relative">

                    <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1 border-2 border-slate-900 bg-pop-blue text-slate-900 text-sm font-bold font-mono shadow-comic -rotate-2">
                        <span>{t('hero.role')}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white uppercase italic tracking-tighter">
                        {t('hero.headline')} <br />
                        <span className="relative inline-block text-pop-yellow px-2 mt-2 transform -rotate-1" style={{ textShadow: '4px 4px 0 #000' }}>
                            <span className="relative font-marker z-10">{t('hero.headline_highlight')}</span>
                            <svg className="absolute -bottom-4 left-0 w-full h-4 text-pop-pink" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-slate-400 text-xl max-w-2xl leading-relaxed font-medium border-l-4 border-slate-700 pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-6">
                        {t('hero.desc')}
                    </p>

                    {/* Miles Morales / Spider-Verse Style ID Card */}
                    <div className="mt-10 p-1 bg-gradient-to-br from-pop-blue via-pop-pink to-pop-yellow rounded-sm w-full md:max-w-md mx-auto md:mx-0 shadow-comic-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                        <div className="bg-slate-900 p-6 relative overflow-hidden h-full">
                            {/* Glitch Overlay */}
                            <div className="absolute inset-0 bg-[url('https://api.iconify.design/heroicons:signal.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

                            <div className="flex items-start gap-4 relative z-10">
                                <div className="w-20 h-20 bg-slate-200 border-4 border-white shadow-md flex items-center justify-center shrink-0 overflow-hidden relative">
                                    {/* Placeholder Avatar with Glitch Effect */}
                                    <div className="absolute inset-0 bg-slate-800 animate-glitch" />
                                    <span className="font-marker text-2xl text-white relative z-10">YZ</span>
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-black text-white italic uppercase leading-none">
                                            {t('hero.card.name1')}
                                            <br />
                                            <span className="text-pop-blue">{t('hero.card.name2')}</span>
                                        </h3>
                                        <div className="bg-pop-pink text-white text-xs font-bold px-2 py-1 transform rotate-3 shadow-sm border border-slate-900">
                                            {t('hero.card.level')}
                                        </div>
                                    </div>
                                    <div className="mt-3 bg-slate-800 h-4 border-2 border-slate-600 relative">
                                        <div className="absolute top-0 left-0 bottom-0 bg-pop-yellow w-[72%] border-r-2 border-slate-900" />
                                        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-slate-900 uppercase tracking-widest">{t('hero.card.progress')}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-between items-end border-t-2 border-dashed border-slate-700 pt-4">
                                <div className="text-center">
                                    <div className="text-[10px] text-slate-500 font-mono uppercase"> {t('hero.card.games')}</div>
                                    <div className="text-xl font-marker text-white">20+</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] text-slate-500 font-mono uppercase">{t('hero.card.clients')}</div>
                                    <div className="text-xl font-marker text-white">4</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-slate-500 font-mono uppercase">{t('hero.card.funny')}</div>
                                    <div className="text-xl font-marker text-pop-pink">3K</div>
                                </div>
                            </div>

                            {/* Decorative Tape */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-200/80 rotate-1 shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* Right: Abstract Tech/Graffiti Visual */}
                <div className="flex-1 relative w-full h-80 md:h-[500px] hidden md:flex items-center justify-center">
                    {/* Halftone Circle */}
                    <div className="absolute w-[450px] h-[450px] bg-halftone opacity-20 rounded-full animate-spin-slow" />

                    {/* Comic Boom Effect */}
                    <div className="absolute w-[350px] h-[350px] border-4 border-slate-800 bg-slate-900 rotate-45 transform transition-transform duration-700 shadow-comic" />
                    <div className="absolute w-[350px] h-[350px] border-4 border-pop-blue bg-transparent -rotate-12 hover:-rotate-45 transition-transform duration-700" />

                    {/* Floating Elements */}
                    <div className="absolute top-0 right-10 text-6xl animate-bounce filter drop-shadow-[4px_4px_0_#000]">⚡</div>
                    <div className="absolute bottom-10 left-0 text-6xl animate-pulse filter drop-shadow-[4px_4px_0_#000]">👾</div>
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
                                onMouseEnter={() => {setActiveProjectId(project.id); trackEvent('hover', 'project_card', project.slug);}}
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
                                        <button className="bg-pop-yellow text-slate-900 px-6 py-3 text-lg font-black font-marker uppercase tracking-wider hover:bg-white hover:scale-105 transition-all border-4 border-slate-900 shadow-[4px_4px_0px_#000]">
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
                                onClick={() => setActiveProjectId(isExpanded ? null : project.id)}
                                className={`
                            relative rounded-sm overflow-hidden border-4 border-slate-900 transition-all duration-300 shadow-comic
                            ${isExpanded ? 'h-[450px]' : 'h-32'}
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
                                            <p className="bg-slate-900/90 text-white p-3 text-sm mb-4 border-l-4 border-pop-pink font-medium">
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
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-pop-pink text-white px-6 py-2 text-2xl font-marker border-4 border-slate-900 transform rotate-1 shadow-comic">
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