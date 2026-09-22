# @vuslife/design

Shared design tokens and icon glyphs for the VUS.Life product family — the "Clinical Blueprint" visual language: color semantics for variant classification (pathogenic / benign / uncertain / incidental) and a matching icon set (dna, gene, clinvar, wiki, ...).

Extracted 2026-09-22 from `vuslife-frontend` (deck + poster). As of the same day this is the **go-forward design system for every VUS.Life surface** — the legacy desktop app's Apple-like/daisyUI look (branches `app.ver_0.1`/`app.ver_0.2`, archived as `archive/app.ver_*`) is retired, and new UI work unifies on Clinical Blueprint.

## What's here

- `tokens.css` — CSS custom properties. Framework-agnostic; `@import` it, or link it, from any web surface.
- `glyphs.tsx` — a single `<Glyph name="..." />` React component, exports `GlyphName`/`GlyphProps` types, forwards `SVGProps` and is `aria-hidden` by default (decorative — every use is paired with a word per the design system's own rule). React-only; peer-depends on `react >=18` (optional — you only need it to use `Glyph`, not for `tokens.css` alone).

## Where this lives, and the setup step it implies

This package lives in the public `vus-life` repo (`github.com/98baxian/vus-life`), which is the home for VUS.Life UI engineering and publicly shareable material. Its private consumer `vuslife-frontend` (the conference deck + poster generator, which lives in a separate private workspace) reaches it through a `file:` dependency.

That means **`vuslife-frontend` cannot build from a fresh clone until this repo is also cloned and linked**:

```bash
git clone https://github.com/98baxian/vus-life.git /Workspace/postdoc-projects/vus-research/vus-life
ln -s /Workspace/postdoc-projects/vus-research/vus-life /Workspace/Yggdrasil/Postdoc/Projects/vus-life
cd /Workspace/Yggdrasil/Postdoc/Projects/vuslife-wiki-project/vuslife-frontend && npm install
```

This is a deliberate trade (an earlier attempt to do the same thing against a local-only repo with no remote was rejected in review, precisely because it could not be recovered by cloning). The failure mode is loud, not silent: `npm run check:tokens` fails with an explicit "not found" before anything renders, and `tsc`/`vite build` fail with `Cannot find module '@vuslife/design'`.

## Known limitation (accepted, not fixed, for now)

Consumers get raw `.tsx` source (no build step, no `.d.ts`), and `vuslife-frontend` needs `resolve.preserveSymlinks: true` (Vite) + `"preserveSymlinks": true` (tsconfig) to resolve `react/jsx-runtime` through the npm-created `file:` dependency symlink in its own `node_modules`. The correct long-term fix is a real build step (compile to ESM + emit declarations, with `react` as this package's own local devDependency so JSX resolves without leaning on `preserveSymlinks` at all) — deferred because there is exactly one consumer today and it already works; do this when a second, non-Vite consumer actually needs compiled output.

## Consuming it

From a sibling project inside the same repo (adjust the relative path to wherever you sit relative to this directory):

```json
"dependencies": {
  "@vuslife/design": "file:../vus-life-design"
}
```

Then:

```ts
import { Glyph } from '@vuslife/design'
```

```css
@import '@vuslife/design/tokens.css';
```

## Changing a token or adding a glyph

This is the single source of truth — never redefine a token or duplicate an icon in a consuming project. `vuslife-frontend`'s `npm run check:tokens` guards against exactly that (and fails loudly if this package's `tokens.css` is missing or incomplete, not just against redefinition).
