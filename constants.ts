import React from 'react';
import { Project, SocialLink, TranslationMap, Sticker } from './types';

// --- ICONS (Replace placeholders with your own SVG paths) ---
export const ICONS = {
  BACKPACK: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }),
    React.createElement("path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }),
    React.createElement("path", { d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" }),
    React.createElement("path", { d: "M8 10h8" }),
    React.createElement("path", { d: "M8 18h8" })
  ),
  CLOSE: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M18 6L6 18" }),
    React.createElement("path", { d: "M6 6l12 12" })
  ),
  STAR_FULL: React.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  ),
  STAR_EMPTY: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "rgb(148 163 184)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  ),
  NEXT_ARROW: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
    React.createElement("polyline", { points: "12 5 19 12 12 19" })
  ),
  PREV_ARROW: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
    React.createElement("polyline", { points: "12 5 5 12 12 19" })
  ),
  QUESTION_MARK: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    React.createElement("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
  ),
  EMAIL: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }),
    React.createElement("polyline", { points: "22,6 12,13 2,6" })
  ),
  LINKEDIN: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
    React.createElement("rect", { x: "2", y: "9", width: "4", height: "12" }),
    React.createElement("circle", { cx: "4", cy: "4", r: "2" })
  ),
  INSTAGRAM: React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
    React.createElement("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
    React.createElement("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
    React.createElement("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
  )
};

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'email', type: 'email', url: 'mailto:yardenzilbrman.mail@gmail.com' },
  { id: 'linkedin', type: 'linkedin', url: 'https://www.linkedin.com/in/yarden-zilberman-graphic-and-game-design/' },
  { id: 'instagram', type: 'instagram', url: 'https://www.instagram.com/hapy_toon/' },
];

export const STICKERS: Sticker[] = [
  {
    id: 'sticker_coffee',
    src: '/assets/projects/Stickers/Smile.webp',
    label: { en: 'Smile', he: 'חייכו' },
    description: { en: 'One small smile can change everything.', he: 'חיוך קטן אחד יכול לשנות הכל.' },
    x: '10%',
    y: '15%',
    page: 'home',
    rotation: -12
  },
  {
    id: 'sticker_controller',
    src: '/assets/projects/Stickers/Lumos.webp',
    label: { en: 'Lumos', he: 'לומוס' },
    description: { en: 'Arrives early and turns on the light in the office.', he: 'מגיע מוקדם ומדליק את האור במשרד.' },
    x: '70%',
    y: '25%',
    page: 'hex-shade',
    rotation: 15
  },
  {
    id: 'sticker_bug',
    src: '/assets/projects/Stickers/Nature.webp',
    label: { en: 'Totoro', he: 'טוטרו' },
    description: { en: 'Nature is always good for the soul.', he: 'טבע תמיד עושה טוב לנשמה.' },
    x: '75%',
    y: '85%',
    page: 'maccabiah-on-time',
    rotation: 45
  },
  {
    id: 'sticker_cat',
    src: '/assets/projects/Stickers/Game.webp',
    label: { en: 'My top games', he: 'המשחקים אהובים עלי' },
    description: { en: "Portal 2 & Evan's Remains", he: "פורטל 2 + Evan's Remains" },
    x: '5%',
    y: '70%',
    page: 'screen-breaker-xp',
    rotation: -5
  },
  {
    id: 'sticker_bug2',
    src: '/assets/projects/Stickers/Duck.webp',
    label: { en: 'Avocado Face', he: 'פני אבוקדו' },
    description: { en: 'It is always important to plan time for unexpected events.', he: 'חשוב תמיד לתכנון זמן לבלת"מים.' },
    x: '75%',
    y: '85%',
    page: 'number-club',
    rotation: 45
  },
  // {
  //   id: 'Duck',
  //   src: '/assets/projects/Stickers/Duck.webp',
  //   label: { en: 'Co-Pilot', he: 'המשחקים אהובים עלי' },
  //   description: { en: "Portal 2 & Evan's Remains", he: "פורטל 2 + Evan's Remains" },
  //   x: '5%',
  //   y: '150%',
  //   page: 'other',
  //   rotation: -5
  // }
];

export const TRANSLATIONS: TranslationMap = {
  // General
  'general.arrow': { en: '←', he: '→' },

  // Navigation
  'nav.home': { en: 'Home', he: 'בית' },
  'nav.lang_en': { en: 'EN', he: 'אנגלית' },
  'nav.lang_he': { en: 'HE', he: 'עברית' },
  'nav.stickers': { en: 'Stickers', he: 'מדבקות' },

  // Intro Loader
  'intro.loading': { en: 'BOOTING_SYSTEM...', he: 'מאתחל_מערכת...' },
  'intro.entering': { en: 'READY_TO_PLAY', he: 'מוכן_למשחק' },

  // Hero
  'hero.name': { en: 'Yarden.', he: 'ירדן.' },
  'hero.intro': { en: "Hey, I'm", he: 'הי, אני' },
  'hero.end': { en: 'A game developer and designer.', he: 'מפתח ומעצב משחקים.' },

  // Hero Stats
  'hero.stats.projects': { en: 'Projects', he: 'פרויקטים' },
  'hero.stats.playtime': { en: 'Playtime', he: 'זמן משחק' },
  'hero.stats.favorites': { en: 'Favorite', he: 'מועדף' },
  'hero.profile.class': { en: 'Class: UI/UX', he: 'סוג: UI/UX' },
  'hero.profile.spec': { en: 'Spec: Game UI', he: 'התמחות: ממשקי משחק' },
  'hero.profile.level': { en: 'Level 07', he: 'רמה 07' },

  // Project Grid
  'projects.title': { en: 'Mission Select', he: 'בחר משימה' },
  'projects.view_btn': { en: 'Start Mission', he: 'התחל משימה' },

  // About
  'about.title': { en: 'About Me', he: 'קצת עליי' },
  'about.p1': {
    en: "I'm a game developer and designer with experience in mobile and web games.<br> I focus on creating clear and enjoyable gameplay experiences by integrating the tutorial into level design, using meaningful feedback, and supporting player understanding through purposeful animations and accessible systems. <br> I value efficiency and aim to develop engaging, accessible games for diverse players and play styles.",
    he: "אני מפתח ומעצב משחקים, עם ניסיון ביצירת משחקים לטלפון ולדפדפן.<br> אני מאמין שמשחק טוב מלמד את השחקן איך לשחק בו, ולכן אני שם דגש על יצירת חווית משחק מהנה וברורה מהרגע הראשון. הגישה שלי מתבטאת בשילוב ההדרכה (של איך משחקים) לתוך תכנון השלבים, שימוש בפידבקים משמעותיים, אנימציות התומכות במשחק והנגשה של מערכות מורכבות לשחקנים.<br>לצד זאת, חשוב לי לעבוד ביעילות ולייצר משחקים מהנים ונגישים למגוון משתמשים וסגנונות משחק."
  },

  // Project Detail
  'detail.back': { en: 'Back to projects', he: 'חזרה לפרויקטים' },
  'detail.role': { en: 'Role', he: 'תפקיד' },
  'detail.time': { en: 'Time Spent', he: 'זמן עבודה' },
  'detail.purpose': { en: 'Purpose', he: 'מטרה' },
  'detail.difficulty': { en: 'Difficulty', he: 'קושי' },
  'detail.what_i_did': { en: 'What I Did', he: 'מה עשיתי' },
  'detail.why': { en: 'Mission Brief', he: 'תקציר משימה' },
  'detail.tech': { en: 'Tech & Tools', he: 'טכנולוגיות וכלים' },
  'detail.gallery': { en: 'Gallery', he: 'גלריה' },
  'detail.casestudy': { en: 'Case Study', he: 'מקרה בוחן' },
  'detail.next': { en: 'Next Mission', he: 'המשימה הבאה' },
  'detail.prev_project': { en: 'Previous', he: 'קודם' },

  // Reward Card
  'reward.tag': { en: 'Rare Drop', he: 'פריט נדיר' },
  'reward.title': { en: 'Unlock a new collab', he: 'פתח שיתוף פעולה חדש' },
  'reward.subtitle': { en: 'Claim this reward by choosing your channel:', he: 'אסוף את הפרס על ידי בחירת ערוץ:' },
  'reward.email.label': { en: 'Email', he: 'אימייל' },
  'reward.email.desc': { en: 'Direct mission briefing', he: 'תדריך משימה ישיר' },
  'reward.linkedin.label': { en: 'LinkedIn', he: 'לינקדאין' },
  'reward.linkedin.desc': { en: 'Professional lobby', he: 'לובי מקצועי' },
  'reward.instagram.label': { en: 'Instagram', he: 'אינסטגרם' },
  'reward.instagram.desc': { en: 'Behind the scenes visuals', he: 'מאחורי הקלעים' },

  // Stickers
  'stickers.title': { en: 'Sticker Collection', he: 'אוסף המדבקות' },
  'stickers.empty': { en: 'No stickers collected yet. Search the home page!', he: 'טרם נאספו מדבקות. חפש בדף הבית!' },
  'stickers.count': { en: 'Collected:', he: 'נאספו:' },
  'stickers.collectAction': { en: 'COLLECT ME!', he: 'אספו אותי!' },
  'stickers.resat': { en: 'RESET ALBUM', he: 'איפוס אלבום' },

  // 404 Page
  '404.title': { en: 'Level Not Found', he: 'השלב לא נמצא' },
  '404.subtitle': { en: 'It looks like you clipped through the map.', he: 'נראה שנפלת מחוץ למפה.' },
  '404.btn': { en: 'Respawn at Home', he: 'חזור לנקודת ההתחלה' },
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'maccabiah-on-time',
    name: { en: 'Maccabiah On Time', he: 'מכביה על הזמן' },
    shortTagline: { en: 'A competitive team game that teaches about the Maccabiah', he: 'משחק תחרותי בקבוצות המלמד על המכביה' },
    shortDescription: {
      en: 'competitive classroom team game that makes Maccabiah history fun.',
      he: 'משחק כיתתי תחרותי בקבוצות, שהופך את ההיסטוריה של המכביה למהנה'
    },
    tag: { en: 'Group Game', he: 'משחק קבוצתי' },
    purpose: { en: 'Bachelors degree final project', he: 'פרויקט גמר תואר ראשון' },
    timeSpent: { en: '7 months', he: '7 חודשים' },
    role: { en: 'Developer and animator', he: 'מפתח ואנימטור' },
    difficulty: 4,
    xpGain: 1250,
    rarity: 'Epic',
    accentColor: '#06b6d4', // Cyan
    coverImage: '/assets/projects/MaccabiahOnTime/Cover.webp',
    workSummary: {
      en: [
        'Designing the game and the learning experience in accordance with existing research on the subject.',
        'Creating a game and a teacher interface.',
        'Testing the product with the target audience and making corrections.'
      ],
      he: [
        'תכנון המשחק והחוויה הלימודית בהתאם למחקר שקיים בנושא.',
        'יצירת משחק וממשק מורה.',
        'בדיקה של התוצר עם קהל היעד וביצוע תיקונים.'
      ]
    },
    whatIDid: {
      en: ['Building the game in Unity', 'Game and character design', 'Animation for the game and videos', 'Backend development'],
      he: ['בניית המשחק ב-Unity', 'עיצוב משחק ודמויות', 'אנימציה למשחק וסרטונים', 'פיתוח בצד שרת']
    },
    technologies: ['Unity', 'Animate', 'Illustrator', 'Razor'],
    projectLink: {
      url: 'https://projects.telem-hit.net/2024/MaccabiahOnTime_YardenInbar',
      label: {
        en: 'Project link',
        he: 'קישור לפרויקט'
      }
    },
    gallery: [
      { type: 'image', src: '/assets/projects/MaccabiahOnTime/Image2.webp', alt: 'Teacher class main screen' },
      { type: 'image', src: '/assets/projects/MaccabiahOnTime/Image4.webp', alt: 'Teacher end game main screen' },
      { type: 'image', src: '/assets/projects/MaccabiahOnTime/Image5.webp', alt: 'In game screenshot' },
      { type: 'image', src: '/assets/projects/MaccabiahOnTime/Image6.webp', alt: 'In game mini game screenshot' },
      { type: 'image', src: '/assets/projects/MaccabiahOnTime/Image7.webp', alt: 'In game screenshot' },
      { type: 'image', src: '/assets/projects/MaccabiahOnTime/Image8.webp', alt: 'In game mini game screenshot' },
    ],
    contentHtml: {
      en: `
   <p class="leading-relaxed text-slate-100">The project &quot;Maccabiah Through Time&quot; was created as my final bachelor’s degree project in 2024. The project is an adventure puzzle game, developed in a team, in collaboration with Maccabi World Union, the organization responsible for the Maccabiah Games. The main goal was to teach students in grades 5–9 about the history and values of the Maccabiah in a playful and unique way.</p>
  <iframe  class="w-full rounded-xl m-auto"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/videoseries?list=PLCZh9YLdvqFOlMfWhOr4H9f4-SxhVVmwp&v=HYVsezZLgwU"
  title="YouTube playlist player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>
<p class="leading-relaxed text-slate-100">Before starting development, we conducted research to understand what already exists and what academic and professional studies recommend. We visited the Maccabiah Museum, analyzed educational games such as Kahoot, and read dozens of articles and professional posts. Based on this research, we decided to create a competitive, team-based game built around an engaging story.</p>

<p class="leading-relaxed text-slate-100">The main challenge was turning a topic that many students consider boring into a fun game experience. The game also had to fit a wide range of ages and skill levels. The final product is a game designed to be played over two class sessions.</p>

<p class="leading-relaxed text-slate-100">In each session, the teacher begins by showing a short animated video that introduces the story. The teacher then divides the class into teams. Each team plays on a computer or tablet. During the game, students talk with historical characters, solve puzzles, collect medals, and play mini-games while earning points. The session ends with a full-class game that tests what the students learned during the team gameplay. At the end, students see the team rankings. The ranking system rewards puzzle-solving and research separately, so students who struggle with puzzles can still feel successful.</p>

<div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
  <figure class="space-y-3">
    <img src="/assets/projects/MaccabiahOnTime/Image3.webp" alt="Example of the score screen at the end of the game" class="w-full rounded-xl object-cover m-auto">
    <figcaption class="text-sm text-slate-300">Example of the score screen at the end of the game</figcaption>
  </figure>
</div>

<p class="leading-relaxed text-slate-100">The testing and QA phase was critical for us. To test the game, we ran usability tests with teachers on the teacher interface. We gave them task lists and observed how they used the system. We also ran a demo lesson with students, identified where they struggled, and talked with them about their experience. Based on the feedback, we made several changes. These included adding more collectible medals, because students really enjoyed that, and updating NPC dialogue and instructions to make the gameplay as clear as possible.</p>

<p class="leading-relaxed text-slate-100">Throughout the project, I was responsible for server-side functionality, building the game itself, game design, and creating animated sequences. The final product received very positive feedback from teachers, students, and professionals, and was recognized as an outstanding final project.</p>

      `,
      he: `
<p class="leading-relaxed text-slate-100">הפרויקט &quot;מכביה על הזמן&quot; נוצר כפרויקט הגמר שלי לתואר ראשון בשנת 2024. הפרויקט הוא משחק הרפתקה עם חידות, שנעשה בקבוצה והיה בשיתוף עם ארגון מכבי תנועה עולמית (האחראית על המכביה). המטרה המרכזית של הפרויקט הייתה ללמד תלמידי כיתות ה’-ט’ על ההיסטוריה והערכים של המכביה בדרך משחקית וייחודית.</p>

<div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">

  <iframe  class="w-full rounded-xl m-auto"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/videoseries?list=PLCZh9YLdvqFOlMfWhOr4H9f4-SxhVVmwp&v=HYVsezZLgwU"
  title="YouTube playlist player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

   
</div>

<p class="leading-relaxed text-slate-100">לפני שניגשנו להתחיל לעבוד על הפרויקט ביצענו מחקר על מנת להבין מה קיים כרגע ומה מחקרים בנושא ממליצים לפני שאנחנו בוחרים בדרך פעולה מסוימת. לשם כך ביקרנו במוזיאון המכביה, ניתחנו משחקים לימודיים שונים (כמו kahoot) וקראנו עשרות מאמרים ופוסטים מקצועיים שונים. לאחר שכלול כל מה שלמדנו החלטנו שהפרויקט יכלול משחק קבוצתי, תחרותי שסובב סביב סיפור מעניין.</p>

<p class="leading-relaxed text-slate-100">האתגר המרכזי בפרויקט היה להפוך נושא שנתפס כמשעמם בקרב תלמידים לחוויה משחקית, שמתאימה למגוון רחב של כיתות ויכולות שונות של תלמידים. התוצר הסופי שלנו הוא משחק שמחולק לשני שיעורים.</p>

<p class="leading-relaxed text-slate-100">בכל שיעור המורה מתחיל להציג לכיתה סרטון אנימציה קצר שמספר את הסיפור של המשחק. לאחר מכן המורה מחלק את התלמידים לקבוצות. כל קבוצה משחקת דרך המחשב או טאבלט. לאורך המשחק התלמידים ידברו עם דמויות היסטוריות, יפתרו חידות, יאספו מדליות וישחקו במשחקונים תוך כדי צבירת ניקוד. השיעור מסתיים במשחק כיתתי שיבחן את הידע של התלמידים במשחק הקבוצתי ולבסוף הם יוכלו לראות את דירוגי הקבוצות. מנגנון הדירוג מתגמל בנפרד הצלחה בחידות והצלחה בחקירת השלבים על מנת לתת תחושת הצלחה גם למי שלא הכי טוב בחידות.</p>

<div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
  <figure class="space-y-3">
    <img src="/assets/projects/MaccabiahOnTime/Image3.webp" alt="דוגמה למסך ניקוד" class="w-full rounded-xl object-cover m-auto">
    <figcaption class="text-sm text-slate-300">דוגמה למסך ניקוד בסוף המשחק</figcaption>
  </figure>
</div>

<p class="leading-relaxed text-slate-100">שלב הבדיקות וה-QA היה מאוד קריטי עבורנו. כדי לבדוק את המשחק עשינו מספר דברים: נתנו מבחני שימושיות למורים על ממשק המורה (נתנו רשימת משימות למורים שצריך לבצע עם המערכת וראינו איך הם מתמודדים איתה). בנוסף העברנו שיעור לדוגמה עבור תלמידים ראינו במה הם מתקשים ושוחחנו איתם כדי לשמוע על החוויה שלהם. על בסיס המשובים שקיבלנו, ביצענו שינויים לדוגמה הוספת מדליות לאיסוף (כי ילדים ממש נהנו מזה) וכן שינוי והוספת טקסטים של NPC או הוראות (כדי לוודא שמהלך המשחק יהיה ברור ככל הניתן).</p>

<p class="leading-relaxed text-slate-100">לאורך הפרויקט הייתי אחראי על כתיבת פונקציונליות השרת, בניית המשחק בפועל, עיצוב המשחק ויצירת קטעי האנימציה. התוצר הסופי התקבל בצורה חיובית מאוד בקרב מורים, תלמידים ואנשי מקצוע, ואף זכה להכרה כפרויקט גמר מצטיין.</p>

      `
    }
  },
  {
    id: '2',
    slug: 'screen-breaker-xp',
    name: { en: 'Screen Breaker XP', he: 'שובר מסך XP' },
    shortTagline: { en: 'Screen breaking simulation', he: 'סימולציית שבירת מסך' },
    shortDescription: {
      en: 'A playful simulation where you get to trash a virtual desktop with all kinds of tools.',
      he: 'סימולציה כיפית בה אתם יכולים להשמיד את המסך שלכם בדרכים מוזרות.'
    },
    tag: { en: 'Remake', he: 'שחזור משחק' },
    purpose: { en: 'Personal Project', he: 'פרויקט אישי' },
    timeSpent: { en: '2 weeks', he: 'שבועיים' },
    role: { en: 'Everything', he: 'הכל' },
    difficulty: 3,
    xpGain: 800,
    rarity: 'Rare',
    accentColor: '#d946ef', // Fuchsia
    coverImage: '/assets/projects/screenBreakerXp/Cover.jpg',
    workSummary: {
      en: ['Defining the game experience', 'Building a dynamic "Draw" system', 'Creating cool and fun tools'],
      he: ['איפיון משחק','בניית מערכת "צייר" דינמית', 'יצירת כלים מגניבים וכיפים']
    },
    whatIDid: {
      en: ['Art', 'Programming'],
      he: ['תכנות', 'עיצוב']
    },
    projectLink: {
      url: 'https://yardenz.itch.io/screen-breaker-xp',
      label: {
        en: 'Game Link',
        he: 'קישור למשחק'
      }
    },
    technologies: ['Godot', 'Affinity'],
    gallery: [
      { type: 'image', src: '/assets/projects/screenBreakerXp/Gif1.gif', alt: 'Gameplay that show to to use the hummer tool' },
      { type: 'image', src: '/assets/projects/screenBreakerXp/Gif2.gif', alt: 'Gameplay of chaos in the game' },
      { type: 'image', src: '/assets/projects/screenBreakerXp/image1.webp', alt: 'Menu in game' },
      { type: 'image', src: '/assets/projects/screenBreakerXp/image2.webp', alt: 'Gameplay that show to to use the dragon tool' }
    ],
    contentHtml: {
      en: `

  <p class="leading-relaxed text-slate-100">
    Screen Breaker XP is a sandbox game with one simple idea: break the screen in the most creative way possible. The game runs on PC, in the browser, and on mobile. The goal is to create an environment and tools that let players freely express creativity, so there is no way to “win” or “lose.”
  </p>

  <p class="leading-relaxed text-slate-100">
    To achieve this feeling, the controls had to be simple and fast. I chose to make the game playable using only the mouse. Right click opens and closes the tool menu, and left click uses the selected tool. I spent a lot of time designing the tool menu until it allowed quick and intuitive switching between tools. The game includes 12 tools, from classics like a hammer and a gun, to a sword and spray paint. Everything is organized so you can switch tools in seconds and stay in the flow.
  </p>

  <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
    <figure class="space-y-3">
      <img src="/assets/projects/screenBreakerXp/UI_Test.webp" alt="Different versions of the tool menu design" class="w-full rounded-xl object-cover max-w-[500px] m-auto">
      <figcaption class="text-sm text-slate-300">
       Different versions of the tool menu design
      </figcaption>
    </figure>
  </div>

  <p class="leading-relaxed text-slate-100">
    The project started as a modern remake of Desktop Destroyer, a game I loved as a child. I wanted to keep the same sense of freedom I felt back then, and also keep some tools I liked, such as the ants. At the same time, I wanted to expand the toolbox and the options beyond the original game.
  </p>

  <p class="leading-relaxed text-slate-100">
    To make the remake feel deeper than the original, I added one simple rule. Some tools cause damage, and others hide damage. Paint or smoke can be erased, but cracks and holes remain. This decision made the experience feel consistent and “logical,” even when it looks chaotic. It also created an interesting technical challenge. Drawing on the screen requires a lot of resources, especially when working on multiple layers at the same time. To prevent the game from slowing down on weaker computers or mobile devices, I applied different optimizations and visual tricks that significantly improved performance.
  </p>

  <p class="leading-relaxed text-slate-100">
    Developing this game helped me improve my skills in creating intuitive rules, designing complex systems, and building UI elements that support clear gameplay goals.
  </p>


`,
      he: `
  <p class="leading-relaxed text-slate-100">
    Screen Breaker XP הוא משחק סנדבוקס עם רעיון אחד פשוט: להרוס את המסך בדרך הכי יצירתית שיש. המשחק רץ על מחשב, בדפדפן ובמובייל. המטרה של המשחק היא לייצר סביבה וכלים שמאפשרים להתפרע עם היצירתיות שלנו ולכן לא ניתן "לנצח" או "להפסיד".
  </p>

  <p class="leading-relaxed text-slate-100">
    כדי להגיע לתחושה הזו דרך השליטה במשחק הייתה צריכה להיות פשוטה וזריזה. על כן בחרתי שהשליטה במשחק תהיה באמצעות העכבר בלבד (לחיצה על מקש ימני לפתיחה וסגירה של תפריט הכלים הזמינים ומקש שמאלי להפעלת הכלי הנבחר). ישבתי הרבה על עיצוב הממשק של תפריט הכלים עד שהגעתי לגרסה שמאפשרת מעבר מהיר ואינטואיטיבי בין כלים.
  </p>

  <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
    <figure class="space-y-3">
      <img src="/assets/projects/screenBreakerXp/UI_Test.webp" alt="ניסיונות עיצוב של תפריט כלים" class="w-full rounded-xl object-cover max-w-[500px] m-auto">
      <figcaption class="text-sm text-slate-300">
        גרסאות שונות לעיצוב תפריט הכלים
      </figcaption>
    </figure>
  </div>

  <p class="leading-relaxed text-slate-100">
    במשחק יש 12 כלים: מהקלאסיקות כמו פטיש ואקדח, ועד חרב ותרסיס צבע. הכול מסודר כך שאפשר להחליף כלי תוך שניות ולהישאר בזרימה.
  </p>

  <p class="leading-relaxed text-slate-100">
    הפרויקט התחיל כרימייק מודרני ל-Desktop Destroyer, משחק שאהבתי כאשר הייתי קטן. רציתי לשמור על אותה תחושה חופש מוחלט שהייתה לי שהייתי קטן (וגם לשמור את חלק מהכלים שאהבתי כמו הנמלים) אבל להרחיב את ארגז הכלים ואת האופציות שהיו במשחק המקורי.
  </p>

  <p class="leading-relaxed text-slate-100">
    כדי שהרימייק ירגיש עמוק יותר מהמקור, הוספתי חוק פשוט: חלק מהכלים עושים נזק, וחלק מסתירים את הנזק. וכך צבע או עשן אפשר למחוק, אבל סדקים וחורים נשארים. ההחלטה הזו הפכה את החוויה לעקבית ו“הגיונית”, גם כשהיא נראית כאוטית. זה גם הוביל לאתגר טכני מעניין. ציור על מסך זה דבר שדורש לא מעט משאבים במיוחד במקומות בהם היה צריך לעשות את זה על שתי השכבות במקביל. אז כדי שהמשחק לא יתקע על מחשבים איטיים או על מובייל ביצעתי התמאות שונות ועוד כמה טריקים ויזואליים ששיפרו את הביצועים בצורה משמעותית.
  </p>

  <p class="leading-relaxed text-slate-100">
    פיתוח המשחק עזר לי להשתפר ביצירת חוקים אינטואיטיביים, אפיון מערכות מורכבות ועיצוב אלמנטי UI בהתאם למטרה המשחקית.
  </p>


      `
    }
  },
  {
    id: '3',
    slug: 'number-club',
    name: { en: 'The Number Club', he: 'מועדון המספרים' },

    shortTagline: {
      en: 'First-grade math mini-games that support textbook learning.',
      he: 'מיני־משחקים במתמטיקה לכיתה א׳ שמלווים את ספר הלימוד.'
    },

    shortDescription: {
      en: 'An educational platform of 40+ first-grade math mini-games designed for clear, playful practice alongside a textbook.',
      he: 'פלטפורמה חינוכית של 40+ מיני־משחקים לכיתה א׳, לתרגול חווייתי ומהנה.'
    },

    tag: { en: 'EdTech Game Suite', he: 'חבילת משחקי EdTech' },
    purpose: { en: 'Work Project', he: 'פרויקט עבודה' },

    timeSpent: { en: '5 months', he: '5 חודשים' },

    role: { en: 'Game Developer & Tech Artist', he: 'מפתח משחקים ו־Tech Artist' },
    difficulty: 3,
    xpGain: 5000,
    rarity: 'Legendary',
    accentColor: '#eab308', // Yellow
    coverImage: '/assets/projects/Wizdi/Image1.webp',
    workSummary: {
      en: ['Game layout planning.', 'Prototype creation.', 'Design and animation of elements', 'Implementation of animations and assets in the game'],
      he: ['תכנון פריסת משחק.', 'יצירת פרוטוטייפ.', "עיצוב והנפשה של אלמנטים.", "הטמעת אנימציות ואסטים במשחק"]
    },
    whatIDid: {
      en: ['Code', 'Design', 'Animation'],
      he: ['קוד', 'עיצוב', 'אנימציה']
    },
    projectLink: {
      url: '',
      label: {
        en: '',
        he: ''
      }
    },
    technologies: ['Construct 3', 'Illustrator'],
    gallery: [
     { type: 'image', src: '/assets/projects/Wizdi/Image2.webp', alt: 'Image from game' },
     { type: 'image', src: '/assets/projects/Wizdi/Image3.webp', alt: 'Image from game' },
     { type: 'image', src: '/assets/projects/Wizdi/Image4.webp', alt: 'Image from game' },
    ],
    contentHtml: {
      en: `<p class="leading-relaxed text-slate-100">
The Numbers Club is a project aimed at creating a gamified framework that accompanies first-grade mathematics textbooks. Throughout the project, I worked on 40+ mini-games, each designed to support different mathematical skills and featuring a framing story, a mechanism, and a unique concept. The platform is intended to allow children to practice basic mathematical skills in an engaging and experiential way. One of the games I developed as part of the collection is “Rock Hyrax Sorts Numbers,” which focuses on understanding number order in the range between 20 and 100.
</p>

<p class="leading-relaxed text-slate-100">
The game works as follows: a bar of wooden blocks appears on the screen, some numbered and some empty. Beneath the first empty block on the number line, an arrow appears to direct the player’s attention. In the center of the screen there are five holes in the ground, from which rock hyraxes randomly pop out, each holding a stone with a number on it. The player must choose the rock hyrax holding the next number in the sequence.
</p>

<div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
  <figure class="space-y-3">
    <img src="/assets/projects/Wizdi/Gif1.gif" alt="Educational game for children" class="w-full rounded-xl object-cover max-w-[500px] m-auto">
    <figcaption class="text-sm text-slate-300">
      Positive feedback in the game
    </figcaption>
  </figure>
</div>

<p class="leading-relaxed text-slate-100">
While working on the game, I was responsible for the development process from creating the game logic, defining the screen layout, to designing and animating the elements. The game was designed with a strong emphasis on clarity and simplicity. The screen structure, element placement, and information hierarchy were chosen to make it as clear as possible what needs to be done. The game includes an opening screen with visual instructions and voice guidance.
</p>

<p class="leading-relaxed text-slate-100">
The main challenge in development was turning a very simple game idea into an enjoyable and rewarding experience. To achieve this, I created short animations for success and failure and combined them with various effects and transitions to produce meaningful and fun feedback. The game reflects my approach to game development, in which the combination of minimalist logic, design, and animation serves as a central tool for creating a clear and meaningful user experience.
</p>
`,
      he: `<p class="leading-relaxed text-slate-100">
מועדון המספרים הוא פרויקט שמטרתו לייצר מעטפת משחקית שמלווה ספרי לימוד במתמטיקה לכיתה א’. לאורך הפרויקט עבדתי על 40+ מיני משחקים כשכל אחד יועד לעזור בתחומים מתמטיים שונים וכלל סיפור מסגרת, מנגנון וקונספט ייחודי. הפלטפורמה נועדה לאפשר לילדים לתרגל מיומנויות מתמטיות בסיסיות בצורה חווייתית. אחד המשחקים שפיתחתי במסגרת האוסף הוא שפן סלע מסדר מספרים, שמתרכז בהבנה של סדר מספרים בטווח שבין 20 ל־100.
</p>

<p class="leading-relaxed text-slate-100">
המשחק עובד כך שעל המסך מופיע סרגל של קוביות עץ, חלקן ממוספרות וחלקן ריקות. מתחת לקובייה הריקה הראשונה על ציר המספרים מופיע חץ שמכוון את תשומת הלב של השחקן. במרכז המסך יש 5 חורים באדמה מהם יוצאים באופן רנדומלי שפני סלע שכל אחד מהם מחזיק אבן עם מספר. על השחקן לבחור את שפן הסלע שמחזיק את המספר הבא בסדרה.
</p>

<div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
  <figure class="space-y-3">
    <img src="/assets/projects/Wizdi/Gif1.gif" alt="משחק לימודי לילדים" class="w-full rounded-xl object-cover max-w-[500px] m-auto">
    <figcaption class="text-sm text-slate-300">
     משוב חיובי במשחק
    </figcaption>
  </figure>
</div>

<p class="leading-relaxed text-slate-100">
בעבודה על המשחק הייתי אחראי על כל תהליך הפיתוח מיצירת לוגיקת המשחק, אפיון פריסת מסך, עיצוב והנפשת האלמנטים. המשחק אופיין מתוך מחשבה רבה על בהירות ופשטות. מבנה המסך, מיקום האלמנטים והיררכיית המידע נבחרו כך שיהיה ברור ככל ניתן מה צריך לעשות. המשחק כולל מסך פתיחה עם הוראות ויזואליות וליווי קולי.
</p>

<p class="leading-relaxed text-slate-100">
האתגר המרכזי בפיתוח היה להפוך רעיון משחקי מאוד פשוט לחוויה מהנה ומתגמלת. לשם כך יצרתי אנימציות קצרות של הצלחה וטעות, ושילבתי אותם עם אפקטים ומעברים שונים כדי לייצר משובים משמעותיים וכיפיים. המשחק משקף את הגישה שלי לפיתוח משחקים, שבה שילוב בין לוגיקה, עיצוב ואנימציה מינימליסטית משמש ככלי מרכזי ליצירת חוויית משתמש ברורה ומשמעותית.
</p>
`
    }
  },
  {
    id: '4',
    slug: 'hex-shade',
    name: { en: 'Hex-Shade', he: 'Hex-Shade' },
    shortTagline: { en: 'Colorful shader-driven platformer', he: 'משחק פלטפורמה צבעוני מבוסס שיידרים' },
    shortDescription: {
      en: 'Colorful platformer about jumping, swimming, and diving through glowing portals.',
      he: 'משחק פלטפורמה צבעוני בו אתם קופצים, שוחים ועוברים דרך פורטלים.'
    },
    tag: { en: 'Shaders', he: 'Shaders' },
    purpose: { en: 'Game Jam', he: 'תחרות משחקים' },
    timeSpent: { en: '3 Days', he: '3 ימים' },
    role: { en: 'Everything', he: 'הכל' },
    difficulty: 3,
    xpGain: 2000,
    rarity: 'Epic',
    accentColor: '#10b981', // Emerald
    coverImage: '/assets/projects/Hex-Shade/Cover.jpg',
    workSummary: {
      en: [
        'Designed intuitive, text-free platformer levels around single mechanics.',
        'Created custom shaders, art for a colorful neon world.'
      ],
      he: [
        'תכנון ובניית שלבים אינטואיטיביים ללא טקסט.',
        'בניית שיידרים, ועיצוב אלמנטים.'
      ]
    },
    whatIDid: {
      en: ['Game Design', 'Programming', 'Shaders & Art'],
      he: ['עיצוב משחק', 'תכנות', 'שיידרים וארט']
    },
    projectLink: {
      url: 'https://yardenz.itch.io/hex-shade',
      label: {
        en: 'Game link',
        he: 'קישור למשחק'
      }
    },
    technologies: ['Unity', 'Illustrator'],
    gallery: [
      { type: 'image', src: '/assets/projects/Hex-Shade/Image1.webp', alt: 'Welcome screen' },
      { type: 'image', src: '/assets/projects/Hex-Shade/Image2.webp', alt: 'Level 8 - water level', },
      { type: 'image', src: '/assets/projects/Hex-Shade/Image3.webp', alt: 'Level 11 - Gameplay screen' },
      { type: 'image', src: '/assets/projects/Hex-Shade/Image4.webp', alt: 'Level 12 - Gameplay screen', }
    ],
    contentHtml: {
      en: `<div class="space-y-4">
  <!-- Paragraph 1 -->
  <p class="leading-relaxed text-slate-100">
    Hex-Shade is a small, colorful platformer I built in Unity over three sleepless days. I made it to teach myself more about shaders. Players jump, swim, and hop through glowing portals. I worked solo on everything: art, shaders, programming the whole thing.
  </p>

  <!-- Paragraph 2 -->
  <p class="leading-relaxed text-slate-100">
    My main design rule was: <span class="font-semibold">no text, no hand-holding</span>. The game should teach you how to play through level design alone. Each level introduces a single mechanic or builds on one you learned in earlier levels. I kept rearranging platforms and hazards until the layout itself made the next move feel obvious.
  </p>

  <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
    <figure class="space-y-3">
      <img
        src="/assets/projects/Hex-Shade/Level layout.webp"
        alt="An example of how I built a tutorial without text."
        class="w-full rounded-xl object-cover max-w-[500px] m-auto"
      >
      <figcaption class="text-sm text-slate-300">
        An example of how I built a tutorial without text.
      </figcaption>
    </figure>
  </div>

  <!-- Paragraph 3 -->
  <p class="leading-relaxed text-slate-100">
    The real star, though, is the shader work. Hex-Shade was my excuse to go way too deep into Unity shaders and see what I could pull off. I used them to make the world feel bright and alive and to guide the player’s eye with subtle glows, color shifts, and effects that make portals and key objects stand out from the background. It turns out shaders aren’t just fancy makeup, they’re also great at saying, “Hey look here. This matters.”
  </p>

  <!-- Paragraph 4 -->
  <p class="leading-relaxed text-slate-100">
    Players gave Hex-Shade really positive feedback, especially on the game’s look and feel, which made the shader obsession worth it. If I made it again, I’d introduce the <span class="font-semibold">portal mechanic earlier</span> and extend a few levels some end faster than they deserve. This project taught me how to teach mechanics without text, how much visual feedback matters in a platformer, and how dangerous it is to tell yourself, “It’s just a quick three-day project.”
  </p>
</div>

`,
      he: `<div class="space-y-4">
  <!-- פסקה 1 -->
  <p class="leading-relaxed text-slate-100">
    Hex-Shade הוא משחק פלטפורמה קטן וצבעוני שבניתי ב-Unity לאורך שלושה ימים בלי יותר מידי שינה אם ניהיה כנים. יצרתי אותו כדי ללמד את עצמי יותר על שיידרים. במשחק השחקנים קופצים, שוחים ומדלגים דרך פורטלים זוהרים. זה פרוייקט שעבדתי עליו לבד כלומר כל האסטים, השיידרים, והתכנות עלי.
  </p>

  <!-- פסקה 2 -->
  <p class="leading-relaxed text-slate-100">
כאשר תכננתי את המשחק הכלל המרכזי שלי היה: <span class="font-semibold">בלי טקסט, בלי להחזיק יד</span>. המשחק אמור ללמד אותך איך לשחק רק באמצעות עיצוב השלבים. כל שלב מציג מכניקה אחת או בונה על מכניקה שלמדת בשלבים הקודמים. העבודה המרכזית הייתה לנסות לייצר שלבים שגורמים למשתמש לבחון את המכניקות של המשחק בדרכים שונות אך בצורה אינטואיטיבית.
  </p>

  <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
    <figure class="space-y-3">
      <img
        src="/assets/projects/Hex-Shade/Level layout.webp"
        alt="דוגמה לאיך שבניתי הדרכה בלי טקסט."
        class="w-full rounded-xl object-cover max-w-[500px] m-auto"
      >
      <figcaption class="text-sm text-slate-300">
        דוגמה לאיך שבניתי הדרכה בלי טקסט.
      </figcaption>
    </figure>
  </div>

  <!-- פסקה 3 -->
  <p class="leading-relaxed text-slate-100">
    עם זאת הכוכבים האמיתיים של המשחק הם השיידרים. Hex-Shade היה התירוץ שלי לצלול עמוק מדי לשיידרים ב-Unity ולראות מה אפשר להוציא מזה. השתמשתי בהם כדי לגרום לעולם להרגיש מואר וחי וגם כדי לכוון את העין של השחקן באמצעות הילות עדינות, שינויי צבע ואפקטים שגורמים לפורטלים ולאובייקטים חשובים לבלוט על הרקע. מסתבר ששיידרים הם לא רק איפור יוקרתי, הם גם מצוינים בלומר, “היי תסתכל פה. זה חשוב.”
  </p>

  <!-- פסקה 4 -->
  <p class="leading-relaxed text-slate-100">
    שחקנים נתנו ל-Hex-Shade פידבק מאוד חיובי, במיוחד על המראה והתחושה של המשחק, וזה הפך את אובססיית השיידרים לשווה את זה. אם הייתי עושה אותו שוב, הייתי מציג את <span class="font-semibold">מכניקת הפורטלים מוקדם יותר</span> ומאריך כמה שלבים חלק מהם נגמרים מהר יותר ממה שמגיע להם. הפרויקט הזה לימד אותי איך ללמד מכניקות בלי טקסט, עד כמה פידבק חזותי חשוב במשחק פלטפורמה, וכמה מסוכן זה להגיד לעצמך: “זה רק פרויקט זריז של שלושה ימים.”
  </p>
</div>
`
    }
  },
  {
  id: '5',
  slug: 'rockys-cookies',
  name: { en: "Rocky's Cookies", he: "Rocky's Cookies" },
  shortTagline: {
    en: 'First-person rope-based 3D platformer prototype',
    he: 'אב טיפוס של משחק פלטפורמה תלת מימדי בגוף ראשון עם מכניקת חבלים'
  },
  shortDescription: {
    en: 'A 3D platformer where players use rope mechanics to explore and move through a closed world.',
    he: 'משחק פלטפורמה תלת מימדי בו השחקן משתמש בחבלים כדי לחקור ולהתקדם בעולם סגור.'
  },
  tag: { en: '3D Game', he: 'משחק תלת מימד' },
  purpose: { en: 'Prototype', he: 'אב טיפוס' },
  timeSpent: { en: '2 Months', he: 'חודשיים' },
  role: { en: 'Everything', he: 'הכל' },
  difficulty: 4,
  xpGain: 1800,
  rarity: 'Rare',
  accentColor: '#f59e0b', // Amber
  coverImage: '/assets/projects/Rockys-Cookies/main.webp',
  workSummary: {
    en: [
      'Developed a first-person rope-based traversal system for 3D movement.',
      'Designed and built a complete 3D prototype including level, UI, and visual setup.'
    ],
    he: [
      'פיתוח מערכת תנועה מבוססת חבלים בגוף ראשון.',
      'תכנון ובנייה של אב טיפוס תלת מימדי כולל שלבים, ממשק משתמש והגדרות ויזואליות.'
    ]
  },
  whatIDid: {
    en: ['Game Design', 'Programming', '3D Modeling', 'UI Design'],
    he: ['עיצוב משחק', 'תכנות', 'מידול תלת מימדי', 'עיצוב ממשק']
  },
  projectLink: {
    url: 'https://yardenz.itch.io/rockyscookies',
    label: {
      en: 'Game link',
      he: 'קישור למשחק'
    }
  },
  technologies: ['Unity', 'Blender', 'Affinity Designer'],
  gallery: [
    { type: 'image', src: '/assets/projects/Rockys-Cookies/Gif3.gif', alt: 'Platforming' },
    { type: 'image', src: '/assets/projects/Rockys-Cookies/Gif2.gif', alt: 'Mini Game' },
    { type: 'image', src: '/assets/projects/Rockys-Cookies/image1.webp', alt: 'Game UI' },
  ],
  contentHtml: {
    en: `<div class="space-y-4">
  <p class="leading-relaxed text-slate-100">
    <strong>Rocky’s Cookies</strong> is a first-person 3D platformer prototype set within a surreal world inside a cereal box. The project was born from a desire to deeply understand the fundamental differences between 2D and 3D level design and to explore the unique challenges inherent in developing within a three-dimensional space.
  </p>

  <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
    <iframe class="w-full rounded-xl m-auto" width="560" height="315" src="https://www.youtube.com/embed/phLDz2ysWKI?si=jSibn5jAs7VQBVZT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>

  <p class="leading-relaxed text-slate-100">
    The game features a linear level designed to provide a clear and intuitive player experience. To add depth to the gameplay, I implemented an objective system that encourages players to explore alternative paths and utilize movement mechanics creatively. A core challenge was creating a "readable" level without relying on text-based tutorials; to achieve this, I focused on guiding the player through environmental storytelling—using visual cues, lighting, and composition to naturally lead the eye toward the next goal.
  </p>

    <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
  <figure class="space-y-3">
    <img src="/assets/projects/Rockys-Cookies/Gif1.gif" alt="Shooting rope in the game" class="w-full rounded-xl object-cover max-w-[500px] m-auto">
    <figcaption class="text-sm text-slate-300">
    Shooting rope in the game
    </figcaption>
  </figure>
</div>

  <p class="leading-relaxed text-slate-100">
    A significant emphasis was placed on total immersion from the very first moment. I wanted to ensure the start screen didn't feel like a generic, detached menu, but rather an integral part of the world. By integrating UI elements directly into the environment (Diegetic UI), I created a seamless transition that pulls the player into the game's atmosphere immediately upon launching.
  </p>


</div>`,
    he: `<div class="space-y-4">

  <p class="leading-relaxed text-slate-100">
Rocky’s Cookies הוא פרוטוטייפ למשחק פלטפורמה תלת-ממדי בגוף ראשון, המתרחש בתוך עולם סוריאליסטי בתוך קופסת דגני בוקר. הפרויקט נולד מתוך מטרה להבין לעומק את ההבדלים השונים בין תכנון משחק דו ממדי לתלת ממד ומה האתגרים הנסתרים שעומדים בפני פיתוח בתלת ממד.
  </p>

<div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">

  <iframe  class="w-full rounded-xl m-auto"
  width="560"
  height="315"
  src="https://www.youtube.com/embed/phLDz2ysWKI?si=jSibn5jAs7VQBVZT"
  title="YouTube playlist player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

   
</div>

  <p class="leading-relaxed text-slate-100">
המשחק כולל שלב אחד ליניארי שמטרתו לייצר חוויית משחק ברורה ואינטואיטיבית למשתמש. על מנת להעמיק את המשחקיות הוספתי מערכת משימות המעודדת חקירה של נתיבים אלטרנטיביים ושימוש יצירתי במכניקות המשחק. אתגר מרכזי בתהליך היה יצירת שלב אינטואיטיבי ככל הניתן ללא שימוש בהסברים טקסטואליים. לצורך כך, התמקדתי בהכוונת השחקן באמצעות רמזים ויזואליים, תאורה וקומפוזיציה סביבתית המובילים את העין לעבר היעד הבא בצורה טבעית.
  </p>

      <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
  <figure class="space-y-3">
    <img src="/assets/projects/Rockys-Cookies/Gif1.gif" alt=" יצירת חבלים במשחק" class="w-full rounded-xl object-cover max-w-[500px] m-auto">
    <figcaption class="text-sm text-slate-300">
    יצירת חבלים במשחק
    </figcaption>
  </figure>
</div>

  <p class="leading-relaxed text-slate-100">
אחד הדברים שהיו לי מאוד חשובים זה לייצר משחק שיראה טוב מהרגע הראשון. לוודא שמסך הפתיחה לא יראה כמשהו גנרי שלא קשור למשחק ולהצליח להכניס את השחקן אל העולם של המשחק מהרגע הראשון. כדי לעשות את זה חיברתי את אלמנטי ה-UI לרקע ולעולם של מסך הפתיחה כך שהוא מרגיש כחלק מהעולם ולא מנותק ממנו.
  </p>

</div>
`
  }
}
];