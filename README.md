# Shannon Keanu A. Yase — Portfolio

Developer portfolio built with React 19, Vite, and Tailwind CSS. Locally hosted Inter, warm neutrals, a muted green accent, and editorial project layouts.

## Projects and scrolling

All six projects are presented in one sequence: Galaxy 3D, AI edit pipeline, NeoCare, Phone Rental App, Cloud & Infrastructure, and the portfolio itself. The original information, assets, links, and other portfolio sections are preserved. Galaxy's stack reflects its actual source: React, Spline, Framer Motion, Tailwind CSS, and Vite.

On sufficiently large desktop viewports, a native sticky section holds the project display while ordinary page scrolling advances chapters. Each chapter pauses for reading, then the image scales and moves while the next arrives. Text fades out before its replacement enters. The rail releases after the sixth project. Numbered buttons jump directly to a chapter; the list toggle and Experience link offer immediate alternatives.

Mobile, short viewports, touch devices, and reduced-motion preferences use a normal flowing list. Reduced-motion desktop visitors can explicitly choose "Enable scroll effects" for the current page session; nothing is persisted and the system preference is not changed.

No animation dependency was added. Scroll updates are batched with requestAnimationFrame; positions are measured on resize, and React state updates only when the active chapter changes. Inactive chapters are inert and hidden from assistive technology. All projects stay available in the list. The full AI case study reuses the existing component in a native dialog with Escape and focus restoration.

Workflow visuals for projects without supplied screenshots are labeled as diagrams. No project results, metrics, employers, or dates have been invented.

## Development

- `npm ci` — install locked dependencies
- `npm run dev` — start Vite
- `npm run build` — generate `dist`
- `npm run preview` — serve the production build
- `npm run lint` — check source

Deploy as a static Vite site using `npm run build` and output directory `dist`. Existing Vercel compatibility is preserved. Inter's license is in `public/fonts/LICENSE.txt`.

Repository: https://github.com/keanulaw/my-portfolio
