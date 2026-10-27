# farm-ui

Design system of the Sítio apps (hub and modules): CSS tokens for light and
dark, base components, the module card and the no-flash theme script.
Extracted from the Segurança app. TypeScript/TSX sources and CSS, no build step.

## Install

```sh
npm install github:gabesf/farm-ui#v0.1.0
```

Peer dependencies: `next`, `react`, `lucide-react`.

`next.config.ts`:

```ts
const nextConfig: NextConfig = { transpilePackages: ["farm-ui"] };
```

`src/app/globals.css`:

```css
@import "tailwindcss";
@import "farm-ui/tokens.css";
@source "../../node_modules/farm-ui/src";
```

Root layout: load Archivo (500/600/700) as `--font-archivo` and Atkinson
Hyperlegible (400/700) as `--font-atkinson` with `next/font/google`, put
`suppressHydrationWarning` on `<html>` and `<ThemeScript />` in `<head>`.
`THEME_COLOR` gives the viewport `themeColor` per scheme.

## Use

```tsx
import { ModuleCard } from "farm-ui/module-card";
import { PageHeader } from "farm-ui/page-header";
```

Everything is also exported from `farm-ui`. Each `.tsx` carries a
`@jsxRuntime automatic` pragma so test runners that transpile `node_modules`
without the app's tsconfig (e.g. `tsx --test`) can render the components.

## Versions

Change = commit + new tag (`vX.Y.Z`) + bump in each app. Never move a tag.
