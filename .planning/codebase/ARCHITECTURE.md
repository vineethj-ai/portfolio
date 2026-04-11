# Architecture

## Design Patterns & Layers
- **Component-Based SPA:** Single-page application built with React.
- **State Management:** Minimal global state using Context API (`LoadingProvider`). The rest is likely local component state using React Hooks.
- **3D Integration:** Deep integration with Three.js via `react-three-fiber` and associated libraries (drei, cannon, postprocessing). 3D models (`CharacterModel`) and 2D HTML content are composed together, often relying on `Suspense` for asynchronous asset loading.
- **Animations:** Animations are orchestrated primarily outside standard CSS using GSAP for scroll-based and timeline animations.
- **Lazy Loading:** `React.lazy` and `Suspense` are used at the top level to split bundles for the large 3D modules.

## Data Flow
- Minimal external data fetching. Data is mostly static, structured, and housed in the repository itself (e.g., `src/data/boneData.ts`).
- Global state such as "Loading Progress" is propagated down from Context Providers.

## Entry Points
- Application bootstrap: `src/main.tsx` renders `src/App.tsx`.
- Root Application Logic: `src/App.tsx` initializes context and suspense boundaries.
