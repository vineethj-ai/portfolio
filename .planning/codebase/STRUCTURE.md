# Directory Structure

## Layout
The codebase is structured completely inside of `src/` following a standard React scaffold layout:

```text
src/
├── components/          # Reusable and page-section React components
│   ├── Character/       # Specific sub-components for the 3D Character model
│   ├── styles/          # CSS stylesheets related to the components
│   └── utils/           # Utility functions used by components
├── context/             # Global React Contexts (e.g., LoadingProvider)
├── data/                # Static data definitions (e.g., boneData.ts)
├── types/               # TypeScript type definitions
└── ...                  # Entry points like App.tsx, main.tsx, and globals
```

## Key Files
- `src/App.tsx`: The main React component assembling providers, suspense fallbacks, and the 3D canvas.
- `src/main.tsx`: The standard Vite/React entry point binding to the DOM.
- `index.html`: The HTML shell.
- `package.json` & `vite.config.ts`: Define dependencies and build configurations.

## Naming Conventions
- React Components use PascalCase (e.g. `MainContainer.tsx`, `TechStack.tsx`).
- Stylesheets follow the name of their corresponding component (e.g. `About.css` inside `styles/`).
- Utility scripts and contexts use camelCase or PascalCase.
