# Hideaway Resort — Design System Proposal

**Status:** AWAITING APPROVAL — Do not build until Garrett approves.

---

## Color Palette

### Primary Colors
| Token | Hex | RGB | Usage |
|---|---|---|---|
| `lake-blue` | `#0E6FAF` | 14, 111, 175 | Primary brand / CTA buttons / links |
| `lake-blue-dark` | `#094E7D` | 9, 78, 125 | Button hover / active states |
| `lake-blue-light` | `#E8F4FC` | 232, 244, 252 | Light blue backgrounds / highlights |

### Neutral Colors
| Token | Hex | RGB | Usage |
|---|---|---|---|
| `slate-900` | `#1A2332` | 26, 35, 50 | Primary text / headings |
| `slate-700` | `#374151` | 55, 65, 81 | Body text |
| `slate-500` | `#6B7280` | 107, 114, 128 | Secondary text / captions |
| `slate-300` | `#D1D5DB` | 209, 213, 219 | Borders / dividers |
| `slate-100` | `#F3F4F6` | 243, 244, 246 | Section backgrounds (alternating) |
| `white` | `#FFFFFF` | 255, 255, 255 | Page background / card surfaces |

### Accent Colors
| Token | Hex | RGB | Usage |
|---|---|---|---|
| `sunset-gold` | `#D4953A` | 212, 149, 58 | Warm accent / special callouts / stars |
| `forest-green` | `#2D6A4F` | 45, 106, 79 | Success states / nature elements |
| `cabin-brown` | `#6B4226` | 107, 66, 38 | Rustic accent (sparingly) |

### Rationale
- **Lake blue** carries forward the existing site's primary blue (#0F75BC) with a slight refinement for better contrast ratios (WCAG AA compliant on white)
- **Sunset gold** evokes the Table Rock Lake sunsets prominently featured in photos
- **Forest green** connects to the Ozark woodland setting
- **Cabin brown** adds a rustic touch without overdoing the "cabin" aesthetic
- Neutrals use a cool-slate tone that complements the blue without competing

---

## Typography

### Font Families
| Token | Font | Fallbacks | Usage |
|---|---|---|---|
| `font-heading` | **Montserrat** | Arial, Helvetica, sans-serif | All headings (H1–H6) |
| `font-body` | **Source Sans 3** | Arial, sans-serif | Body text, paragraphs, UI elements |

### Type Scale
| Element | Size (desktop) | Size (mobile) | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 (Hero) | 3.5rem (56px) | 2.25rem (36px) | 700 | 1.1 | -0.02em |
| H2 (Section) | 2.25rem (36px) | 1.75rem (28px) | 700 | 1.2 | -0.01em |
| H3 (Card/Sub) | 1.5rem (24px) | 1.25rem (20px) | 600 | 1.3 | 0 |
| H4 | 1.25rem (20px) | 1.125rem (18px) | 600 | 1.4 | 0 |
| Body (lg) | 1.125rem (18px) | 1rem (16px) | 400 | 1.7 | 0 |
| Body (base) | 1rem (16px) | 1rem (16px) | 400 | 1.7 | 0 |
| Body (sm) | 0.875rem (14px) | 0.875rem (14px) | 400 | 1.6 | 0 |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 500 | 1.5 | 0.02em |

### Rationale
- **Montserrat** is already used on the existing site — continuity is important for brand recognition
- **Source Sans 3** (Google Fonts, free) is highly legible at all sizes, pairs beautifully with Montserrat, and is optimized for web (variable font available for performance)
- Type scale follows a harmonious ratio with generous line heights for readability

---

## Spacing System

Using a 4px base unit with Tailwind's default spacing scale:

| Token | Value | Common Usage |
|---|---|---|
| `1` | 4px | Tight gaps, icon padding |
| `2` | 8px | Inline spacing, small gaps |
| `3` | 12px | Form element padding |
| `4` | 16px | Standard element spacing |
| `6` | 24px | Card padding, section inner gaps |
| `8` | 32px | Between components |
| `12` | 48px | Section padding (mobile) |
| `16` | 64px | Section padding (desktop) |
| `20` | 80px | Large section gaps |
| `24` | 96px | Hero/feature section padding |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-sm` | 4px | Buttons, inputs |
| `rounded` | 8px | Cards, image containers |
| `rounded-lg` | 12px | Modal, large cards |
| `rounded-xl` | 16px | Hero image overlays |
| `rounded-full` | 9999px | Avatars, badges, pills |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | 0 1px 2px rgba(0,0,0,0.05) | Subtle card lift |
| `shadow` | 0 4px 6px -1px rgba(0,0,0,0.1) | Default card shadow |
| `shadow-md` | 0 10px 15px -3px rgba(0,0,0,0.1) | Hover state / elevated cards |
| `shadow-lg` | 0 20px 25px -5px rgba(0,0,0,0.1) | Modals, dropdowns |

---

## Component Patterns

### Buttons
- **Primary:** `lake-blue` background, white text, `rounded-sm`, slight shadow on hover
- **Secondary:** White background, `lake-blue` border + text, transparent → light blue on hover
- **CTA "Book Now":** `sunset-gold` background, `slate-900` text, larger size, bold weight

### Cards (Cabin Cards)
- White background, `rounded` corners, `shadow-sm` default → `shadow-md` on hover
- Full-bleed image top, content area below
- Subtle upward translate on hover (2px)

### Navigation
- Sticky header, white background with subtle bottom border
- Logo left, nav links center, "Book Now" CTA right
- Mobile: hamburger menu → full-screen overlay

### Sections
- Alternating white / `slate-100` backgrounds
- Consistent vertical padding (`py-16` desktop, `py-12` mobile)
- Max content width: 1280px (`max-w-7xl`)

---

## Overall Aesthetic Direction

**Modern lakeside retreat** — Clean and contemporary with natural warmth. The site should feel like stepping onto a dock at sunset: calm, inviting, slightly aspirational. Photography does the heavy lifting; the design system stays out of the way with generous whitespace, crisp typography, and a restrained color palette where blue anchors everything and gold provides warmth.

Not: rustic-cabin-overload. Not: generic-hotel-template. Think: Airbnb-quality presentation for a place with genuine character.
