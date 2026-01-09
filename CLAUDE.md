# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Custom Lovelace card for Home Assistant that displays mail and package delivery information from the [Mail and Packages integration](https://github.com/moralmunky/Home-Assistant-Mail-And-Packages). Shows delivery counts from USPS, UPS, FedEx, and Amazon, along with optional USPS Informed Delivery mail images.

## Build System

**TypeScript + Rollup** with bundled Lit (v3).

```bash
npm install          # Install dependencies
npm run build        # Production build → dist/ha-mail-and-packages-card.js
npm run dev          # Development with watch mode
```

## Architecture

```
src/
  ha-mail-and-packages-card.ts   # Main card component (LitElement)
  types.ts                     # TypeScript interfaces
dist/
  ha-mail-and-packages-card.js   # Bundled output (tracked for HACS)
```

## Key Technical Details

- **Custom element**: `ha-mail-and-packages-card`
- **Editor**: Schema-based via `getConfigForm()` (no separate editor component)
- **Card picker**: Registered via `window.customCards.push()`
- **Required config**: `updated` sensor must be defined
- **Version**: 0.7.0 (constant `CARD_VERSION` in source)

## Card Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `updated` | sensor | **Required** - Mail updated timestamp sensor |
| `name` | string | Card title |
| `details` | boolean | Show package counts section (default: true) |
| `image` | boolean | Show GIF from `gif_sensor` (default: false) |
| `camera` | boolean | Show camera entity image (default: false) |
| `deliveries_message` | sensor | Custom template sensor for delivery summary |
| `packages_delivered`, `packages_in_transit` | sensor | Total package counts |
| `usps_packages`, `ups_packages`, `fedex_packages`, `amazon_packages` | sensor | Per-carrier counts |
| `usps_mail` | sensor | USPS mail piece count |
| `gif_sensor` | sensor | Sensor containing path to mail_today.gif |
| `camera_entity` | camera | Local file camera for mail image |

## Development Notes

- Edit TypeScript source in `src/`, run `npm run build` to compile
- Uses Lit decorators: `@customElement`, `@property`, `@state`
- Static `styles` getter for CSS (uses HA CSS custom properties)
- `shouldUpdate()` checks only configured entities for efficient re-renders
- HACS compatibility configured via `hacs.json`
