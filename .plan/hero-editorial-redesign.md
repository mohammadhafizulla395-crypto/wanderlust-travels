# Hero Section Redesign Plan — Editorial Magazine Style

## Task Summary
Redesign the hero section for a more editorial, high-end travel magazine look-and-feel while keeping the existing Tailwind v4 design tokens and tech stack intact.

---

## 1. Design Tokens Already in Place (use as-is)

| Token | Value | Usage |
|---|---|---|
| `primary-400/500` | `#ef8d2e` / `#d66a1f` | Warm orange — CTA only (Book Now buttons) |
| `secondary-500/600` | `#34956a` / `#247854` | Forest green — tag accents |
| `neutral-50` | `#F8F5EF` | Main ivory background |
| `neutral-200` | `#e2ddd3` | Subtle borders, dividers |
| `neutral-800/900` | `#2e2a25` / `#1C1C1A` | Body text, headings |
| `font-heading` | Playfair Display | Headings, dates, labels |
| `font-body` | Inter | Body, buttons, metadata |

No new CSS tokens needed — everything required is already in `index.css` and the Tailwind v4 `@theme` block.

---

## 2. Component Architecture

### 2a. Hero Container — Full-screen editorial layout

**File:** `src/components/Hero.tsx`

**Changes:**
- Keep `min-h-screen` + `relative` container with background image
- Replace the old gradient overlay with a more sophisticated layered approach:
  - **Bottom layer:** Background image (the palace exterior, same `url` — no motion)
  - **Middle layer:** Dark gradient scrim — goes from transparent at top to `rgba(28,28,26,0.65)` at bottom, but only covers the **bottom ~70%** of the viewport
  - **Top layer:** A very subtle `bg-neutral-50/10` warm noise-like wash at the top to give the sky area a slight editorial warmth

**Layout grid:** Keep the existing CSS grid (`grid md:grid-cols-2`) with two zones:
- Left zone: Empty (lets the image breathe) — editorial rule of thirds
- Right zone: Content card

### 2b. Content Card — Editorial typesetting

**Inside right zone, vertical stack:**

| Element | Tailwind Classes | Notes |
|---|---|---|
| **Overline** (destination label) | `font-heading text-xs md:text-sm tracking-[0.25em] uppercase text-primary-400 mb-4` | New element — editorial "category" line. Renders `Santorini, Greece`. On mobile, sits above the title. |
| **Title** | `font-heading text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-white mb-6` | Existing title. Tighten `leading` from `1.2` to `1.1`. Use `font-medium` (weight 500) instead of `font-normal` for stronger editorial weight. |
| **Metadata row** | `flex flex-wrap items-center gap-x-6 gap-y-2 mb-8` | Container for date + rating + duration |
| ↳ Date | `font-heading text-sm md:text-base text-neutral-200` | Icon replaced with a thin `border-b border-primary-400 pb-0.5` underline accent beneath the date text. Remove the `<Calendar>` icon wrapper — just the text with a decorative underline. |
| ↳ Divider | `w-px h-4 bg-neutral-200/40` | Thin vertical separator |
| ↳ Duration | `font-body text-sm md:text-base text-neutral-200` | Keep the `<Clock>` icon (16px), keep text. Add a subtle `border-b border-primary-400 pb-0.5` underline accent to match the date style. |
| ↳ Divider | `w-px h-4 bg-neutral-200/40` | Thin vertical separator |
| ↳ Rating | `font-body text-sm md:text-base text-neutral-200` | Star icon stays. Add `border-b border-primary-400 pb-0.5` underline accent. |
| **Description** | `font-body text-base md:text-lg text-neutral-200 leading-relaxed mb-10 max-w-lg` | Keep existing text, increase `max-w` slightly for editorial feel. Remove the first paragraph's `mb-3` on desktop — use a single `mb-10` for the whole block. |
| **CTA Buttons** | `flex flex-col sm:flex-row gap-4` | Keep existing button group |
| ↳ Book Now | `font-heading text-sm tracking-widest uppercase px-10 py-4 bg-primary-500 text-white hover:bg-primary-600 rounded transition-all duration-300 hover:scale-105 shadow-lg` | Keep existing — this is the hero CTA, primary orange. |
| ↳ Learn More | `font-heading text-sm tracking-widest uppercase px-10 py-4 border border-neutral-200/30 text-white hover:bg-neutral-200/10 rounded transition-all duration-300` | Change border from `neutral-50/50` to `neutral-200/30` for better contrast on ivory-wash. Keep hover state. |

### 2c. Scroll indicator — Editorial refinement

- Keep the `animate-bounce` scroll indicator at bottom center
- Change `mt-20` to `mt-24` for more breathing room
- Add `opacity-60` to soften it (editorial photos don't need heavy CTAs)
- Keep the icon size at 24px

### 2d. Mobile hero text — Editorial treatment

- Add the **Overline** element for mobile (rendered above the title, hidden on desktop via `md:hidden`)
- Use same `font-heading text-xs tracking-[0.25em] uppercase text-primary-400 mb-3` for mobile overline
- On mobile, keep a shorter version of the description (1 paragraph) and add a horizontal scroll indicator with text

---

## 3. Files to Modify

| File | Change |
|---|---|
| `src/components/Hero.tsx` | Primary changes — all editorial redesign |
| `src/pages/HomePage.tsx` | No changes needed — Hero is self-contained |
| `src/App.tsx` | No changes needed |
| `src/index.css` | No changes needed — all tokens exist |
| `tailwind.config.js` | No changes needed |

**Only one file needs editing: `src/components/Hero.tsx`**

---

## 4. Visual Hierarchy (top to bottom)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   [Background image — palace exterior, no motion]        │
│                                                          │
│            ┌─────────────────────────────┐               │
│            │                             │               │
│            │  SANTORINI, GREECE          │ ← overline    │
│            │  (small caps, orange)       │   (new)       │
│            │                             │               │
│            │  A Timeless                  │               │
│            │  Mediterranean              │ ← title       │
│            │  Escape                      │   (Playfair)  │
│            │                             │               │
│            │  January 2026 · 7 Days · 4.9│ ← metadata    │
│            │  ─────────────────────────  │   (underlines) │
│            │                             │               │
│            │  Description text goes      │               │
│            │  here, set in Inter at      │ ← body        │
│            │  generous line height...    │   (Inter)     │
│            │                             │               │
│            │  [BOOK NOW]  [LEARN MORE]   │ ← CTA buttons │
│            │                             │               │
│            └─────────────────────────────┘               │
│                                                          │
│                        ↓ scroll                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 5. Editorial Design Principles Applied

1. **Typographic hierarchy with 3 levels:** Overline (category) → Title (headline) → Body (text). The overline is a new element that establishes the magazine "section" label pattern.

2. **Restrained color:** Orange appears ONLY in the overline label and the primary CTA button — never in headings or body text. This keeps the editorial restraint.

3. **Vertical rhythm:** Generous whitespace (`mb-6`, `mb-8`, `mb-10`) between sections creates the breathing room typical of print magazine layouts.

4. **Decorative underlines:** The date/rating metadata uses thin `border-b border-primary-400` underlines instead of icons, giving a more refined editorial feel while still anchoring the metadata visually.

5. **Font weight tuning:** `font-medium` (500) on the title is stronger than normal but not as heavy as semibold — this is the standard weight for magazine headlines.

6. **Image as hero:** The image takes up the full viewport. The content card sits to the right on desktop, letting the photograph dominate the left two-thirds — classic editorial split-screen layout.

7. **No decorative elements:** Removed the calendar icon, keeping only functional icons (clock, star). The overline label replaces the need for icon-based decoration.

---

## 6. Responsive Behavior

| Breakpoint | Layout |
|---|---|
| **Mobile** (< 768px) | Full-screen image with gradient scrim. Content card at bottom with overline → title → 1-paragraph description → CTA buttons. Scroll indicator below. |
| **Desktop** (≥ 768px) | Two-column grid. Left 2/3: empty image. Right 1/3: content card with full description and metadata. No overline (hidden via `md:hidden`). |

---

## 7. Edge Cases & Constraints

- **No new CSS needed** — all styling uses existing Tailwind utility classes + the design tokens from `index.css`
- **No new components** — everything lives in `Hero.tsx`
- **No breaking changes** — the Hero component's props interface stays the same
- **Performance** — no new images, no animations beyond the existing scroll bounce
- **Accessibility** — keep existing `aria-label` on the scroll indicator, semantic heading hierarchy (h1), alt text on background image

---

## 8. Success Criteria

- [ ] Background image fills viewport, no white space
- [ ] Content card is readable with sufficient contrast against the image
- [ ] Playfair Display renders for all headings and metadata
- [ ] Inter renders for body text and buttons
- [ ] Orange (`primary-400/500`) appears ONLY on overline label and Book Now button
- [ ] Green (`secondary-500`) does NOT appear in the hero section
- [ ] Mobile layout is usable with full-width card and readable text
- [ ] Desktop layout shows editorial split-screen (image left, content right)
- [ ] Scroll indicator is visible but unobtrusive
- [ ] No console errors or warnings

---

## 9. Verification Steps

1. Run `npm run dev` and open `http://localhost:5173`
2. Visually inspect hero on desktop — should show split layout with image left, content right
3. Resize to mobile — should stack vertically with full-width image and content card at bottom
4. Verify Playfair Display font loads (check Network tab for Google Fonts request)
5. Verify Inter font loads
6. Check that the orange overline label and Book Now button are the only orange elements
7. Verify the Book Now button links to `/packages` (existing behavior)
8. Verify Learn More button has `scroll-to-contact` class (existing behavior)
9. Verify scroll indicator bounces at the bottom
10. Run `npm run build` to ensure no build errors

---

## 10. Commit Message

```
feat: redesign hero section with editorial magazine layout

- Add overline destination label in Playfair Display
- Refine typography hierarchy with font-medium title weight
- Add decorative underline accents to date/rating metadata
- Improve content card spacing for editorial breathing room
- Soften scroll indicator opacity
- Keep existing CTA buttons and scroll-to behavior
```
