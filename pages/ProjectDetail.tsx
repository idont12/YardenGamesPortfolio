import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS, ICONS,STICKERS } from '../constants';
import Sticker from '../components/Sticker'; 
import NotFound from './NotFound';

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t, getLocalized } = useLanguage();
    const navigate = useNavigate();

    const projectIndex = PROJECTS.findIndex(p => p.slug === slug);
    const project = PROJECTS[projectIndex];

    // Handle circular navigation safely if project exists
    // If project is not found, projectIndex is -1. Using conditional check to prevent invalid access.
    const nextProject = project ? PROJECTS[(projectIndex + 1) % PROJECTS.length] : null;
    const prevProject = project ? PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length] : null;

    const projectStickers = useMemo(() => {
        return STICKERS.filter(s => (s as any).page === slug);
    }, [slug]);

    // Scroll to top on mount/change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return <NotFound />;
    }

    // Helper to render stars
    const renderStars = (rating: number) => {
        return (
            <div className="flex space-x-1 text-pop-yellow">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-slate-700'}`}>
                        {i < rating ? ICONS.STAR_FULL : ICONS.STAR_EMPTY}
                    </div>
                ))}
            </div>
        );
    };

    const rarityStyles: Record<string, string> = {
        Common: 'bg-slate-500 border-slate-900 text-white',
        Rare: 'bg-pop-blue border-slate-900 text-slate-900',
        Epic: 'bg-pop-pink border-slate-900 text-white',
        Legendary: 'bg-pop-yellow border-slate-900 text-slate-900',
    };

    const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;
    const galleryImages = useMemo(
        () => (project.gallery ?? []).filter((g) => g.type === 'image'),
        [project.gallery]
    );

    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const isLightboxOpen = lightboxIndex !== null;

    useEffect(() => {
        if (!isLightboxOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxIndex(null);

            if (galleryImages.length > 1 && e.key === 'ArrowRight') {
                setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
            }

            if (galleryImages.length > 1 && e.key === 'ArrowLeft') {
                setLightboxIndex((i) =>
                    i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
                );
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden'; // prevent page scroll behind modal

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [isLightboxOpen, galleryImages.length]);


    return (
        
        <div className="pt-24 min-h-screen pb-20 bg-slate-950 overflow-x-hidden">
 {/* --- PROJECT SPECIFIC STICKERS --- */}
            {projectStickers.map((sticker) => (
                <Sticker key={sticker.id} data={sticker} />
            ))}
            
            {/* --- HERO HEADER --- */}
            <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
                <Link to="/" className="inline-flex items-center text-sm font-bold font-mono text-pop-blue hover:underline mb-8 uppercase tracking-widest">
                    <span className="text-lg mr-2 rtl:mr-0 rtl:ml-2">{t('general.arrow')}</span> {t('detail.back')}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="font-marker bg-white text-slate-900 px-3 py-1 border-2 border-slate-900 shadow-[2px_2px_0_#000] -rotate-2">
                                {getLocalized(project.tag)}
                            </span>
                            <span className={`px-3 py-1 text-xs font-black uppercase self-center border-2 shadow-[2px_2px_0_#000] rotate-1 ${rarityStyles[project.rarity] || rarityStyles.Common}`}>
                                {project.rarity}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none uppercase italic" style={{ textShadow: '4px 4px 0 #000' }}>
                            {getLocalized(project.name)}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-10 font-bold border-s-8 border-pop-blue ps-6 bg-slate-900/50 py-2">
                            {getLocalized(project.shortTagline)}
                        </p>

                        {/* Comic Style Ability Cards (Stats) */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Card 1: Role */}
                            <div className="bg-white p-3 border-4 border-slate-900 shadow-comic transform hover:-rotate-1 transition-transform">
                                <div className="text-[10px] font-black uppercase text-slate-500 mb-1 tracking-widest">{t('detail.role')}</div>
                                <div className="font-marker text-slate-900 leading-tight text-lg">{getLocalized(project.role)}</div>
                            </div>
                            {/* Card 2: Time */}
                            <div className="bg-pop-yellow p-3 border-4 border-slate-900 shadow-comic transform hover:rotate-1 transition-transform">
                                <div className="text-[10px] font-black uppercase text-slate-900/60 mb-1 tracking-widest">{t('detail.time')}</div>
                                <div className="font-marker text-slate-900 leading-tight text-lg">{getLocalized(project.timeSpent)}</div>
                            </div>
                            {/* Card 3: Purpose */}
                            <div className="bg-pop-pink p-3 border-4 border-slate-900 shadow-comic transform hover:rotate-1 transition-transform text-white">
                                <div className="text-[10px] font-black uppercase text-white/80 mb-1 tracking-widest">{t('detail.purpose')}</div>
                                <div className="font-marker leading-tight text-lg">{getLocalized(project.purpose)}</div>
                            </div>
                            {/* Card 4: Difficulty */}
                            <div className="bg-slate-800 p-3 border-4 border-slate-900 shadow-comic transform hover:-rotate-1 transition-transform">
                                <div className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">{t('detail.difficulty')}</div>
                                <div className="mt-1">{renderStars(project.difficulty)}</div>
                            </div>

                        </div>
                    </div>

                    {/* Hero Image Area */}
                    <div>
                        <div className="relative aspect-video border-4 border-slate-900 shadow-comic-lg bg-slate-800 group overflow-hidden max-h-[50vh] m-auto mb-5">
                            <img
                                src={project.coverImage}
                                alt={getLocalized(project.name)}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none mix-blend-overlay" />
                        </div>
                        {project.projectLink?.url && (
                            <a
                                href={project.projectLink.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-3 bg-pop-yellow text-slate-900 px-6 py-3 border-4 border-slate-900 shadow-[6px_6px_0px_#000] font-black font-marker uppercase tracking-wider hover:bg-white transition-colors"
                            >
                                {getLocalized(project.projectLink.label)}
                                <span className="w-5 h-5 rtl:scale-x-[-1]">{ICONS.NEXT_ARROW}</span>
                            </a>
                        )}
                    </div>

                </div>

            </div>

            {/* --- INFO COLUMNS --- */}
            <div className="bg-pop-blue border-y-4 border-slate-900 py-16 mb-20 relative overflow-hidden">
                {/* Background Texture */}
                <div className="absolute inset-0 bg-halftone-light opacity-30" />

                <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-slate-900">
                    {/* Col 1 */}
                    <div className="bg-white p-6 border-4 border-slate-900 shadow-[8px_8px_0_#000]">
                        <h3 className="text-xl font-black uppercase italic mb-4 border-b-4 border-pop-pink inline-block">
                            {t('detail.what_i_did')}
                        </h3>
                        <ul className="space-y-2 font-medium">
                            {(getLocalized(project.whatIDid) as string[]).map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-pop-pink mr-2 rtl:mr-0 rtl:ml-2">●</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2 */}
                    <div className="bg-white p-6 border-4 border-slate-900 shadow-[8px_8px_0_#000]">
                        <h3 className="text-xl font-black uppercase italic mb-4 border-b-4 border-pop-orange inline-block">
                            {t('detail.why')}
                        </h3>
                        <ul className="space-y-2 font-medium">
                            {(getLocalized(project.workSummary) as string[]).map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-pop-orange font-black mr-2 rtl:mr-0 rtl:ml-2">»</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div className="bg-slate-900 p-6 border-4 border-slate-900 shadow-[8px_8px_0_#3ba0a6]">
                        <h3 className="text-xl font-black uppercase italic mb-4 text-white border-b-4 border-pop-blue inline-block">
                            {t('detail.tech')}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1 bg-slate-800 text-pop-blue border border-slate-700 text-xs font-mono font-bold uppercase">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* --- CASE STUDY CONTENT --- */}
            <div className="px-6 md:px-12 max-w-3xl mx-auto mb-20">
                <div className="mb-8 p-4 bg-pop-pink text-white inline-block border-4 border-slate-900 shadow-comic rotate-1">
                    <h2 className="text-2xl font-black font-marker uppercase">{t('detail.casestudy')}</h2>
                </div>

                <div
                    className="prose prose-invert prose-lg prose-p:font-medium prose-headings:font-black prose-headings:italic prose-a:text-pop-blue max-w-none text-slate-300 space-y-6"
                    dangerouslySetInnerHTML={{ __html: getLocalized(project.contentHtml) as string }}
                />
            </div>

            {hasGallery && (
                <div className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
                    <h2 className="text-4xl font-black text-white mb-8 border-b-4 border-slate-800 pb-4 inline-block uppercase italic transform -rotate-1">
                        {t('detail.gallery')}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {project.gallery.map((item, idx) => (
                            <div key={idx} className="border-4 border-slate-900 bg-slate-900 shadow-comic hover:scale-[1.02] transition-transform duration-300 flex">
                                {item.type === 'image' && item.src && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const idx = galleryImages.findIndex((g) => g.src === item.src);
                                            setLightboxIndex(idx >= 0 ? idx : 0);
                                        }}
                                        className="block w-full text-left"
                                        aria-label="Open image"
                                    >
                                        <img src={item.src} alt={item.alt || ''} className="w-full h-auto" />
                                    </button>
                                )}

                                {item.type === 'video' && item.embedHtml && (
                                    <div
                                        className="aspect-video w-full"
                                        dangerouslySetInnerHTML={{ __html: item.embedHtml }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- NAVIGATION: NEXT MISSION --- */}
            {nextProject && prevProject && (
                <div className="border-t-4 border-slate-800 bg-slate-900 py-12">
                    <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Prev */}
                        <button
                            onClick={() => navigate(`/project/${prevProject.slug}`)}
                            className="flex items-center space-x-4 group rtl:space-x-reverse text-slate-500 hover:text-white transition-colors "
                        >
                            <div className="w-10 h-10 border-2 border-current rounded-full flex items-center justify-center transform group-hover:-translate-x-2 rtl:group-hover:translate-x-2 transition-transform">
                                <div className="w-5 h-5 rtl:scale-x-[-1]">{ICONS.PREV_ARROW}</div>
                            </div>
                            <div className="ltr:text-left rtl:text-right hidden md:block">
                                <div className="text-xs font-mono uppercase">{t('detail.prev_project')}</div>
                                <div className="font-bold">{getLocalized(prevProject.name)}</div>
                            </div>
                        </button>

                        {/* Next Button (Main Call to Action) */}
                        <button
                            onClick={() => navigate(`/project/${nextProject.slug}`)}
                            className="relative bg-pop-yellow text-slate-900 px-8 py-4 text-xl font-black font-marker uppercase tracking-wider hover:bg-white transition-all border-4 border-slate-900 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-1 flex items-center gap-4 group rtl:right-auto rtl:left-2"
                        >
                            <span>{t('detail.next')}</span>
                            <div className="w-6 h-6 rtl:scale-x-[-1] transition-transform">{ICONS.NEXT_ARROW}</div>
                        </button>
                    </div>
                </div>
            )}
            {isLightboxOpen && galleryImages.length > 0 && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
    onMouseDown={(e) => {
      // close only when clicking the backdrop, not inside the modal content
      if (e.target === e.currentTarget) setLightboxIndex(null);
    }}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/80" />

    {/* Modal */}
    <div className="relative z-10 max-w-6xl w-full">
      <div className="relative border-4 border-slate-900 shadow-comic-lg bg-slate-950">
        {/* Close (X) */}
        <button
          type="button"
          onClick={() => setLightboxIndex(null)}
          className="absolute -top-4 -right-4 bg-white text-slate-900 border-4 border-slate-900 w-12 h-12 font-black shadow-comic flex items-center justify-center"
          aria-label="Close"
        >
          <span className="w-6 h-6">{ICONS.CLOSE}</span>
        </button>

        {/* Prev / Next */}
        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() =>
                setLightboxIndex((i) =>
                  i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
                )
              }
              className="absolute left-2 top-1/2 rtl:right-2 rtl-class:right-2 -translate-y-1/2 bg-white text-slate-900 border-4 border-slate-900 w-12 h-12 font-black shadow-comic flex items-center justify-center"
              aria-label="Previous image"
            >
              <span className="w-6 h-6 rtl:scale-x-[-1]">{ICONS.PREV_ARROW}</span>
            </button>

            <button
              type="button"
              onClick={() =>
                setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length))
              }
              className="absolute right-2 top-1/2 rtl:right-auto rtl:left-2 -translate-y-1/2 bg-white text-slate-900 border-4 border-slate-900 w-12 h-12 font-black shadow-comic flex items-center justify-center"
              aria-label="Next image"
            >
              <span className="w-6 h-6 rtl:scale-x-[-1]">{ICONS.NEXT_ARROW}</span>
            </button>
          </>
        )}

        {/* Image */}
        <img
          src={galleryImages[lightboxIndex!].src}
          alt={galleryImages[lightboxIndex!].alt || ''}
          className="max-h-[85vh] w-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  </div>
)}


        </div>
    );
};

export default ProjectDetail;
