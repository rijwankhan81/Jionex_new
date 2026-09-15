# Jionex — Fresh Light Editorial

A fresh rebuild direction for Jionex using the existing Jionex content, translations and visual assets.

## Design direction
- Light editorial interface
- Large typography and generous whitespace
- Numbered navigation/content hierarchy
- Purple `#57007b` + pink `#de4396` brand system
- Existing Jionex translations: English, বাংলা, العربية, Español
- Existing Jionex assets retained
- Subtle GSAP reveal/motion; no heavy 3D or distracting effects
- Responsive mobile navigation and RTL support for Arabic

## Main app
The active site is under `src/app/[locale]`.

Legacy Pages Router code is retained under `src/legacy-*` only as a source/reference layer and is not the active homepage implementation.

## Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Dependency compatibility

React is pinned to `19.2.0` because React Three Fiber 9.x requires React `>=19 <19.3`.
