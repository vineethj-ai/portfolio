# Conventions

## Coding Style
- **Components:** Functional components relying on React Hooks (`useState`, `useEffect`, `useContext`).
- **Styling:** CSS files attached to individual components (`import './App.css'`). Minimal CSS-in-JS usage except for any default `drei` styling.
- **Typing:** TypeScript is heavily used, though there is occasional fallback to `any` for complex Three.js/Cannon physics ref properties.
- **Animations:** Managed externally via `gsap` (ScrollTrigger overrides). Best practice here dictates using `useGSAP` or extensive cleanups within `useEffect` hooks to prevent memory leaks and strict-mode issues.

## File Organization
- Shared utility logic resides under `src/components/utils/`.
- Major page sections are their own React component (e.g. `Career.tsx`, `About.tsx`).
