# Concerns & Technical Debt

## Technical Debt
- **Loose Typings:** Some parts of the 3D logic (`gsapScroll.ts`, `Character/utils/lighting.ts`, etc.) contain `any` typings which sidesteps TypeScript safety checks.
- **Leftover Debugging:** Occasional `console.log` statements are left behind in the source files.

## Performance Risks
- **WebGL Memory & Bundle Size:** Bundling several heavy Three.js dependencies (`@react-three/cannon`, `@react-three/postprocessing`) plus external models poses a risk to Time To Interactive (TTI).
- **GSAP DOM Manipulation:** Extensive scroll hijacking with GSAP needs careful management during React component unmount to avoid memory leaks.
- **Suspense boundaries:** Ensure robust error boundaries exist alongside `Suspense` so that incomplete model loading doesn't crash the entire page.

## Missing Best Practices
- Lack of an automated testing suite creates high friction for regressions, especially with complex chained animations.
