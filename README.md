# YZ Game UI Portfolio

A gamified, tech-inspired portfolio website built with React, Vite, and Tailwind CSS. Features "Into the Spider-Verse" comic aesthetics, bilingual support (EN/HE), a sticker collection system, and game-HUD mechanics.

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run development server:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Visual Style & Customization

The site uses a mix of Cyberpunk HUD and Comic Book aesthetics.

### CSS & Styling Architecture

The project uses a mix of **Tailwind CSS** and **Global CSS Classes**.

1.  **Tailwind Configuration (`index.html`)**:
    *   Since this is a standalone project structure, the Tailwind configuration is currently located inside the `<script>` tag in `index.html`.
    *   You can edit the `colors` theme (e.g., `pop-yellow`, `pop-pink`) or `fontFamily` there.

2.  **Global CSS Classes (`index.html`)**:
    *   Look for the `<style>` tag in `index.html`.
    *   This is where custom utility classes like `.bg-halftone`, `.shadow-comic`, and scrollbar styles are defined.
    *   If you want to change the shadow direction or dot pattern size, edit it here.

3.  **Fonts**:
    *   **Space Grotesk:** Main body text.
    *   **JetBrains Mono:** Code and technical labels.
    *   **Permanent Marker:** Handwritten / Graffiti accents (Comic vibe).
    *   To change fonts, update the Google Fonts link in `index.html` and the `fontFamily` config in the script tag.

## 🖼️ How to Change Icons (SVGs)

All icons (backpack, social links, stars, arrows) are centrally located in `constants.ts`.

1.  Open `constants.ts`.
2.  Locate the `ICONS` object at the top.
3.  Replace the SVG JSX with your own.
    *   *Tip: Use `currentColor` for stroke/fill to let Tailwind classes control the color.*

Example:
```typescript
export const ICONS = {
  BACKPACK: (
    <svg ...> ... </svg> // Paste your new SVG here
  ),
  // ...
};
```

## 📝 How to Edit Text & Projects

All text content is in `constants.ts`.

1.  **Translations:** Edit `TRANSLATIONS` object for UI labels (EN/HE).
2.  **Projects:** Edit `PROJECTS` array.
    *   `rarity`: Determines the border color of the project card.
    *   `gallery`: Add image URLs or Video embed HTML.

## 👾 How to Add Stickers

1.  Add sticker images to `public/assets/stickers/`.
2.  In `constants.ts`, add to the `STICKERS` array.
3.  Set `x` and `y` for their position on the Home page.

## 🎥 Rive Intro Integration

To replace the HTML/CSS loader with a real Rive animation:

1.  Install the library: `npm install @rive-app/react-canvas`
2.  Open `components/IntroLoader.tsx`.
3.  Follow the comments inside the file to implement the `useRive` hook.