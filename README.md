# Shannon Keanu A. Yase — Portfolio

Developer portfolio built with React 19, Vite, and Tailwind CSS. Locally hosted Inter, warm neutrals, a muted green accent, and editorial project layouts.

## Projects and scrolling

Seven projects appear in this order: Video Editing Portfolio, Galaxy 3D, AI edit pipeline, NeoCare, Phone Rental App, Cloud & Infrastructure, and the developer portfolio itself. Existing information and other sections remain intact. The flagship video portfolio uses a lightweight interface excerpt with actual project thumbnails; it loads no video players. Its live and GitHub links point to the published video portfolio.

On desktop viewports at least 1000px wide and 680px tall, the native sticky gallery activates automatically. Ordinary document scrolling advances every chapter, then releases into Experience. The first project gets an extra half chapter of reading time. No activation button, manual mode, pointer capability, focus state, custom wheel handler, or drag state controls activation. Sequence numbers are passive indicators. The Experience link remains an optional shortcut.

Reduced motion preserves the same automatic sequence using immediate chapter changes, with no translation, rotation, scaling, or crossfade. Mobile and compact viewports use a normal flowing list with all seven projects visible. The device preference is never overridden.

No animation dependency was added. Scroll work is batched with requestAnimationFrame; geometry is measured on resize and font readiness. React state changes only when the active chapter changes. Inactive chapters are inert and hidden from assistive technology. The AI case study uses the existing native dialog with Escape and focus restoration.

## Development

- `npm ci` — install locked dependencies
- `npm run dev` — start Vite
- `npm run build` — generate `dist`
- `npm run preview` — serve the production build
- `npm run lint` — check source

Deploy as a static Vite site using `npm run build` and output directory `dist`. Existing Vercel compatibility is preserved. Inter's license is in `public/fonts/LICENSE.txt`.

Repository: https://github.com/keanulaw/my-portfolio
