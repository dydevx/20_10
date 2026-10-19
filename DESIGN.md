---
name: "20.10 — Rose-Lit Office Keepsake"
description: "A personal, rose-lit paper keepsake celebrating the women of the office."
colors:
  rose-950: "#4d1d31"
  rose-900: "#672840"
  rose-800: "#85364f"
  rose-700: "#a54862"
  rose-600: "#c05a75"
  rose-500: "#dd7890"
  rose-300: "#f1b0bd"
  rose-200: "#f7ccd3"
  rose-100: "#fce4e7"
  rose-50: "#fff6f5"
  cream: "#fff9f2"
  paper: "#fffdf9"
  champagne: "#bd9253"
  champagne-light: "#ead6ad"
  ink: "#462b32"
  ink-soft: "#765a60"
typography:
  display:
    fontFamily: '"Cormorant Garamond", "Times New Roman", serif'
    fontSize: "clamp(3.6rem, 5.6vw, 5.3rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Cormorant Garamond", "Times New Roman", serif'
    fontSize: "clamp(2.65rem, 5.1vw, 4.35rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Cormorant Garamond", "Times New Roman", serif'
    fontSize: "1.48rem"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: '"Be Vietnam Pro", "Segoe UI", sans-serif'
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: '"Be Vietnam Pro", "Segoe UI", sans-serif'
    fontSize: "0.65rem"
    fontWeight: 600
    letterSpacing: "0.2em"
  script:
    fontFamily: '"Great Vibes", "Brush Script MT", cursive'
    fontSize: "2.3rem"
    fontWeight: 400
rounded:
  sm: "2px"
  md: "3px"
  lg: "4px"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.rose-800}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.rose-950}"
  paper-letter:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "clamp(3.1rem, 7vw, 5.7rem) clamp(1.55rem, 8vw, 6rem)"
  glass-navigation:
    backgroundColor: "rgba(255, 251, 246, 0.84)"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "8px 19px"
    height: "66px"
---

# Design System: 20.10 — Rose-Lit Office Keepsake

## Overview

**Creative North Star: "Rose-Lit Office Keepsake"**

This is a warm, romantic, quietly celebratory visual world: a personal paper keepsake, illuminated in rose and cream, that opens into a celebration of the real women in this office. Cormorant lettering brings a soft editorial voice; clear Vietnamese body copy and generous space keep the experience welcoming rather than ornate.

The composition uses folded-paper cues, fine champagne lines, and authentic portraits to make the page feel handmade for its recipients. Animation adds a brief sense of occasion, while the underlying surfaces stay calm and legible. It explicitly avoids generic greeting-card templates and cluttered effects.

**Key Characteristics:**
- Rose-lit paper, blush, cream, and champagne details.
- Real office portraits lead; decorative framing supports them.
- Elegant display type paired with clear Vietnamese copy.
- Soft ambient depth and restrained, purposeful motion.

## Colors

Rosewater Pink is the signature accent, balanced by a deep berry for legible emphasis, pale petal tones for atmosphere, warm paper neutrals, and champagne gold for fine details.

### Primary
- **Rosewater Pink** (`#a54862`): Main rose accent for highlighted display words, active details, and celebratory emphasis.
- **Deep Berry** (`#4d1d31`): Strong headline and contrast color on light paper.
- **Rose Ribbon** (`#85364f`): Primary action surface and important interactive accents.
- **Petal Rose** (`#dd7890`): Lighter rose for gradient transitions and decorative blooms.
- **Soft Petal** (`#f7ccd3`): Portrait frames and softly tinted areas.

### Secondary
- **Champagne Gold** (`#bd9253`): Use for fine rules, seals, ornaments, and small celebratory details.
- **Pale Champagne** (`#ead6ad`): Subtle paper ornament and warm highlight.

### Neutral
- **Rose Paper** (`#fff6f5`): Page background and the lightest rose wash.
- **Warm Cream** (`#fff9f2`): Warm canvas and soft surfaces.
- **Keepsake Paper** (`#fffdf9`): Letter and paper-card surfaces.
- **Soft Blush** (`#fce4e7`): Pale rose surface and background transition.
- **Warm Ink** (`#462b32`): Default body text.
- **Muted Rose Ink** (`#765a60`): Secondary text on light surfaces.

### Named Rules
**The Champagne-Line Rule.** Gold is a fine accent for seams, seals, and small details—not a large competing field.

## Typography

**Display Font:** Cormorant Garamond (with Times New Roman, serif fallback)  
**Body Font:** Be Vietnam Pro (with Segoe UI, sans-serif fallback)  
**Signature Font:** Great Vibes (with Brush Script MT, cursive fallback)  
**Label Font:** Be Vietnam Pro (no separate mono face)

**Character:** Cormorant Garamond gives the occasion an expressive, keepsake-like voice; Be Vietnam Pro keeps Vietnamese copy direct and easy to read. Great Vibes is reserved for brief signature flourishes, not functional text.

### Hierarchy
- **Display** (500, `clamp(3.6rem, 5.6vw, 5.3rem)`, `.82` line-height): The hero occasion headline; compact leading creates an editorial two-line silhouette.
- **Headline** (500, `clamp(2.65rem, 5.1vw, 4.35rem)`, `.96` line-height): Section titles and the letter heading.
- **Title** (600, `1.48rem`, `1.15` line-height): Portrait-card names and short subheads.
- **Body** (400, `15px`, `1.75` line-height): Main copy and explanatory text; keep paragraphs comfortably readable and avoid long measures.
- **Label** (600, `.65rem`, `.2em` tracking, uppercase where used): Date eyebrow and short navigation cues.

### Named Rules
**The Two-Voice Rule.** Use the expressive serif for occasion and identity; use the sans-serif for information, controls, and Vietnamese reading copy.

## Layout

The hero is a full-height, two-column composition on wide screens: the greeting occupies the left and the photographic arrangement the right. A centered content measure of roughly 1,210px anchors the page. Below it, sections alternate open editorial layouts with a letter surface, an irregular portrait gallery, and a portrait-card field. Keep negative space around the greeting and preserve the photos as the visual proof that this page belongs to this office.

At tablet widths the hero columns tighten; at 720px and below the experience becomes a single-column flow with smaller section gutters and adapted portrait arrangements. Short landscape viewports use a reduced hero height and tighter copy rhythm so the invitation remains in the first screen. Use the existing 720px, 1,000px, and 680px-height transitions as the responsive reference points.

## Elevation & Depth

This is a softly lifted paper system. Broad, low-contrast shadows separate paper from the rose wash, while a clearer lift is reserved for hover and focus. Champagne rules, overlapping photographs, and translucent surfaces provide additional depth; avoid stacking borders and strong shadows on every surface.

### Shadow Vocabulary
- **Paper ambient** (`0 28px 70px rgba(109, 54, 71, .12), 0 5px 18px rgba(109, 54, 71, .08)`): The shared lift beneath the letter surface.
- **Card ambient** (`0 12px 32px rgba(94, 41, 60, .08)`): Quiet resting depth for individual portrait cards.
- **Interactive lift** (`0 23px 42px rgba(94, 41, 60, .15)`): Hover response for a card; pair with a small rise, not a permanent heavy shadow.

### Named Rules
**The Soft-Lift Rule.** Resting surfaces receive ambient depth; stronger lift belongs to interaction states.

## Shapes

The paper geometry is predominantly square and finely edged: 2–4px corners on controls and navigation, unrounded letter edges, and thin champagne or rose borders. Circular portrait crops are reserved for individual avatars. Double inset rules and small corner seams are recurring paper-fold signatures; keep them delicate.

## Components

### Buttons
- **Character:** Tactile, keepsake-like, and gently responsive.
- **Shape:** Nearly square corners (`2px`).
- **Primary:** Rose gradient with white label, 54px minimum height, and generous horizontal padding.
- **Hover / Focus:** Darken to deep berry, lift slightly, and strengthen the soft shadow; keyboard focus remains clearly visible.
- **Text link:** Underlined by a fine rose rule with a small downward arrow; keep it visually quieter than the opening action.

### Cards / Containers
- **Corner Style:** Square for the letter; 3–4px for compact surfaces.
- **Background:** Warm white or cream paper against a rose wash.
- **Shadow Strategy:** Use the ambient paper shadow for the letter and the quieter card shadow for portrait cards; reserve stronger lift for hover.
- **Border:** Fine warm-gold or rose line, with inset corner details on signature keepsake surfaces.
- **Internal Padding:** Generous and responsive on the letter; compact but airy on portrait cards.

### Navigation
- **Style:** A compact, fixed paper strip with a translucent warm-cream fill, fine light edge, and soft blur.
- **Typography:** Small Be Vietnam Pro labels with calm rose-brown text.
- **States:** Clear focus-visible outlines; links stay understated until interacted with.
- **Mobile:** Collapse to the compact menu control and preserve clear touch targets.

### Portrait Gallery
- **Character:** A varied, editorial keepsake arrangement—not a uniform tile grid.
- **Frame:** Warm white photograph edge, close crop, restrained shadow, and rose/champagne light on hover or focus.
- **Interaction:** Zoom and a small rotation reveal a heart cue; activating a portrait opens the accessible lightbox.
- **Responsive:** Keep varied image proportions and preserve legible names without relying on hover.

### Polaroid Rail
- **Character:** Snapshot prints with deliberately varied, slight rotations.
- **Interaction:** On hover or focus-within, straighten and lift the print; keep the caption short and personal.

## Do's and Don'ts

### Do:
- **Do** use Rosewater Pink (`#a54862`) as a deliberate accent against light paper.
- **Do** reserve Champagne Gold (`#bd9253`) for thin seams, rules, and small ornaments.
- **Do** let the supplied portraits and names lead the story.
- **Do** preserve the serif/sans pairing and readable Vietnamese text.
- **Do** keep motion purposeful, lightweight, and responsive to reduced-motion preferences.
- **Do** keep opening actions, focus states, and mobile touch targets clear.

### Don't:
- **Don't** use generic greeting-card templates or clutter decorative effects.
- **Don't** let decoration compete with the people being celebrated.
- **Don't** turn champagne gold into a large, high-contrast surface.
- **Don't** make important information depend on hover, sound, or animation.
- **Don't** use heavy shadows or rounded pill shapes as the default form language.
