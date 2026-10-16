---
name: Cap Entrepreneur
description: The applicant's own prefecture file, opened on the desk.
colors:
  forest: "#283618"
  olive: "#606c38"
  cream: "#fefae0"
  kraft: "#dda15e"
  rust: "#bc6c25"
  rust-deep: "#955318"
  cream-shade: "#f3eece"
  cream-muted: "#f2edd4"
  olive-ink: "#4d5a30"
  fibre-line: "#d3c59c"
  field-stroke: "#b2a876"
  refusal-red: "#a52b1d"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5.2vw, 4.6rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 78"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.2rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 78"
  page-title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "\"wdth\" 78"
  numeral:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 900
    lineHeight: 1
    fontFeature: "\"tnum\""
    fontVariation: "\"wdth\" 70"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.4
    fontVariation: "\"wdth\" 90"
  body:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Atkinson Hyperlegible, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
  stamp:
    fontFamily: "Archivo Variable, Archivo, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.06em"
    fontVariation: "\"wdth\" 70"
rounded:
  control: "0px"
  sheet: "2px"
  folder: "3px"
  stamp: "0.3rem"
  tab: "5px"
spacing:
  slip-edge: "10px"
  sheet-sm: "20px"
  sheet-md: "24px"
  sheet-lg: "36px"
  gutter: "32px"
  column-gap: "56px"
  section: "80px"
  section-md: "112px"
components:
  button-primary:
    backgroundColor: "{colors.rust-deep}"
    textColor: "{colors.cream}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cream}"
  button-forest:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cream}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "44px"
  button-forest-hover:
    backgroundColor: "{colors.olive}"
  button-outline:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.forest}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  button-outline-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.cream}"
  button-kraft:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.forest}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "56px"
  button-kraft-hover:
    backgroundColor: "{colors.cream}"
  input-field:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.forest}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "44px"
  sheet:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.forest}"
    rounded: "{rounded.sheet}"
    padding: "{spacing.sheet-md}"
  folder-tab:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.cream}"
    rounded: "{rounded.tab}"
    padding: "10px 16px 8px"
  folder-tab-current:
    backgroundColor: "{colors.kraft}"
    textColor: "{colors.forest}"
  piece-number:
    textColor: "{colors.olive}"
    typography: "{typography.stamp}"
    rounded: "{rounded.sheet}"
    padding: "0 6px"
  state-tag:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.cream}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "2px 8px"
  stamp:
    textColor: "{colors.rust}"
    typography: "{typography.stamp}"
    rounded: "{rounded.stamp}"
    padding: "2.4px 8.8px"
---

# Design System: Cap Entrepreneur

## Overview

**Creative North Star: "The Prefecture File on the Desk"**

Every surface is a piece of one physical dossier seen from above: a forest-green felt blotter for the desk, a kraft board folder lying open on it, olive tab dividers, cream sheets carrying everything that is read or filled in, and rust rubber stamps marking what has been received. The interface does not imitate the file as decoration; the real controls (account, CV drop zone, project paragraph, payment) live on the sheets, and supplying a piece is acknowledged by a stamp pressing onto it.

Density is that of an administrative folder: generous margins on the board, tight, legible sheets, numbered pieces, dashed ruled dividers, tabular numerals. Paper sits slightly askew (tilts between -1.5 and +2.5 degrees) and straightens when it becomes the active piece. Materials are generated in CSS (SVG turbulence for kraft fibre and felt grain, radial gradients for tear and perforation holes), never image textures.

The palette is pinned by the owner to five hues; secondary values are tints and shades of those five. The world rejects the SaaS split hero, rows of feature cards and the beige-template look: every warm surface must read as file material.

**Key Characteristics:**
- Three material planes: forest desk, kraft board, cream sheet. Olive is the divider band.
- Rust is the stamp and the active state; a darkened rust carries text-bearing actions.
- Archivo variable, condensed via width axis, for headings, numerals and stamps; Atkinson Hyperlegible for all reading.
- Square controls, near-square paper (2px), soft paper shadows, one hard board-edge under the folder.
- Motion is physical and rare: a stamp press and a piece settling.

## Colors

Five pinned file materials (forest, olive, cream, kraft, rust) plus tints for paper shading and one accessible rust shade for text.

### Primary
- **Stamp Rust** (#bc6c25): stamps, the active piece ring, the focus outline, the textarea caret, list bullets. Mark colour, not text colour: it reaches only 3.8:1 on cream.
- **Ledger Rust** (#955318): rust darkened for anything that carries words: the pay button, checkbox accents, the "failed" state tag, FAQ plus icon. 5.7:1 on cream.

### Secondary
- **Kraft Board** (#dda15e): the folder board, the current header tab, the closing call-to-action, the "in progress" tag, text selection, warning alerts (at 20%). Always with forest text.
- **Divider Olive** (#606c38): folder tabs, the procedure band, piece numbers, source links, positive state tags. Cream text on olive (5.4:1).

### Neutral
- **Desk Forest** (#283618): the felt blotter (header, hero desk, footer, closing band, auth frame) and the ink of every sheet. Also the secondary solid button.
- **Sheet Cream** (#fefae0): every readable sheet, input fields, text on desk and olive.
- **Cream Shade** (#f3eece): attached-file chip, info alerts, table totals row.
- **Cream Muted** (#f2edd4): muted fills.
- **Olive Ink** (#4d5a30): secondary text on sheets (hints, captions, meta).
- **Fibre Line** (#d3c59c): hairlines and dashed dividers.
- **Field Stroke** (#b2a876): input and drop-zone strokes.
- **Refusal Red** (#a52b1d): errors only, as text or a 10% wash.

### Named Rules
**The Five Hues Rule.** No hue outside the pinned five, except materials that exist in a real file: the paperclip's steel grey and the index card's pale blue ruling. Status uses the palette (olive done, kraft waiting, ledger rust failed), never green/amber/sky utility tones.

**The Mark Versus Ink Rule.** Stamp Rust marks; Ledger Rust speaks. Any rust surface or rust text that must be read uses #955318.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui)
**Body Font:** Atkinson Hyperlegible (with system-ui)

**Character:** A condensed, heavy grotesque from the rubber-stamp and file-label tradition, paired with a typeface designed for low-vision legibility, for an audience often reading French as a second language.

### Hierarchy
- **Display** (900, clamp(2.3rem, 5.2vw, 4.6rem), 0.95, width 78%): the hero headline on the folder's left flap only.
- **Headline** (900, clamp(2rem, 3.6vw, 3.2rem), 1, width 78%): section headings across the landing page.
- **Page Title** (900, 2.25rem, width 78%): h1 of account, order, legal and auth pages (auth at 1.875rem).
- **Numeral** (900, 3.75rem to 4.5rem, width 70%, tabular): the piece counter, procedure step numbers (1.875rem), prices (1.875rem, width 75%).
- **Title** (700, 1.125rem to 1.25rem, width 88-90%): piece titles, sheet headings, button labels on the large actions.
- **Body** (400, 1.0625rem, 1.6): all reading; paragraphs held to 46-68ch.
- **Small** (400, 0.875rem): hints, legal lines, sources; 0.75rem for meta.
- **Label** (700, 0.75rem, 0.05em, uppercase): state tags and the "ou par e-mail" divider.
- **Stamp** (800, width 70%, 0.06em, uppercase): stamps and "Pièce n°" headers.

### Named Rules
**The Width Axis Rule.** Hierarchy in Archivo is carried by the width axis as much as size: 70% for numerals and stamps, 78% for headings, 85-90% for titles and tabs. Never render Archivo at full width.

**The Tabular Rule.** Every count, price, file size and table figure uses tabular numerals.

## Layout

A single 1280px column (max-w-7xl) with 16px gutters, 32px from 768px. Sections stack as bands of file material (desk, cream page, olive band, kraft band, desk) with 80px vertical padding, 112px from 768px. Two-column splits are asymmetric (0.8-1.05fr against 0.95-1.2fr) with 48-56px gaps and collapse to one column below 1024px. The hero folder splits 0.9fr / 1.1fr with a spine crease at 45%; the left flap is sticky on desktop. Secondary pages use narrow centred columns (max-w-2xl to max-w-4xl). Sheets pad 20px, 24px from 768px; feature sheets 28-36px. Lists are separated by 2px dashed fibre-line rules, not by boxes.

## Elevation & Depth

Depth is physical paper stacking: soft, tinted shadows under sheets, one deeper drop under the folder, and tilt. Nothing floats; there are no glass panels or glows apart from the pay button's rust underlight.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 1px 1px hsl(84 39% 10% / 0.12), 0 10px 24px -12px hsl(84 39% 10% / 0.45)`): every cream sheet.
- **Index card** (`box-shadow: 0 1px 1px hsl(88 38% 10% / 0.1), 0 8px 18px -10px hsl(88 38% 10% / 0.4)`): FAQ cards.
- **Folder** (`box-shadow: 0 3px 0 hsl(28 55% 42%), 0 34px 60px -22px rgb(0 0 0 / 0.65)`): the folder board only; the 3px solid layer is the board's cut edge.
- **Pay underlight** (`box-shadow: 0 6px 14px -6px hsl(var(--rust-deep))`): the primary pay button only.
- **Paperclip** (`drop-shadow(1px 2px 1px rgba(0,0,0,0.35))`): clip SVGs.

### Named Rules
**The Board Edge Rule.** The only solid offset shadow is the folder's 3px board edge. It describes the board's thickness; it is not a button or card style.

## Shapes

Controls are square (0px). Paper is near-square (2px), the folder board 3px, header tabs round only on top (5px), stamps 0.3rem with a double 3px border. Signature silhouettes are generated: a torn slip edge (punched 4px holes on a 14px repeat, kraft showing through), a perforated strip (2.5px dots on a 14 by 8px repeat), the index card's rust header rule at 3.1rem with 1.7rem blue ruling, and the spine crease gradient. No pills, no fully rounded shapes.

## Components

### Buttons
Blunt and administrative: square, bold, solid fills.
- **Shape:** square corners (0px).
- **Primary (pay):** ledger rust fill, cream Archivo title text, 56px tall, full width on the order slip, rust underlight; hover turns forest, active nudges down 1px; disabled at 45% opacity.
- **Forest:** forest fill, cream bold text, 44px; hover olive. Form submits.
- **Outline:** 2px forest stroke on cream, forest text; hover fills forest. File picker, Google sign-in, secondary actions.
- **Kraft:** kraft fill, forest Archivo text, 56px, on the desk; hover cream. The closing call-to-action.
- **Text link button:** bold olive or forest underlined text.

### Inputs / Fields
- **Style:** cream fill, 2px field-stroke border, square, 44px tall (textarea six rows, relaxed leading).
- **Focus:** global 3px stamp-rust outline, 3px offset.
- **Error:** bold refusal-red text, or a 10% refusal-red wash block.
- **Drop zone:** 2px dashed field stroke; on drag-over the stroke turns rust and the fill takes kraft at 25%.

### Navigation
Folder tabs hanging from the bottom of a 64px desk header: olive tabs with cream Archivo semibold text, the current section in kraft with forest text, 5px top radius; on hover the tab lifts by growing its top padding (200ms). Hidden below 1024px. Account links are cream-outlined square buttons.

### Pieces (signature)
A cream sheet titled by an olive-outlined "Pièce n° N" header in stamp lettering. Inactive pieces sit tilted; the active piece straightens and takes a 2px rust ring; a supplied piece settles in (600ms) and receives a "REÇU" stamp.

### Stamps (signature)
Rust, condensed 800 uppercase lettering in a 3px double border, slightly masked for ink texture, set at -8 degrees. Entry animation presses it on: scale 1.9 to 1, rotate -14 to -8 degrees, blur 4px to 0, 520ms cubic-bezier(0.16, 1, 0.3, 1).

### State Tags
Square uppercase label tags: olive/cream done, kraft/forest waiting, forest outline to-do, ledger rust/cream failed.

### Index Cards
FAQ entries as ruled index cards with a 3.1rem summary row above the rust rule, tilted a few tenths of a degree; the plus icon rotates 45 degrees when open.

## Do's and Don'ts

### Do:
- **Do** place every readable form, document sample and long answer on a cream sheet (#fefae0) with the sheet shadow.
- **Do** build each band from file material: forest desk, kraft board, olive divider, cream page.
- **Do** use Ledger Rust (#955318) for any rust that carries words, and Stamp Rust (#bc6c25) for marks, rings and focus.
- **Do** set Archivo with the width axis (70-90%) and tabular numerals for counts and prices.
- **Do** tilt paper slightly (-1.5 to +2.5 degrees) and straighten the piece the user is working on.
- **Do** honour reduced motion: stamp and settle animations collapse to instant.

### Don't:
- **Don't** introduce hues outside the pinned five, including utility green, amber or sky status tones.
- **Don't** round controls or use pill shapes; controls are square, paper is 2px.
- **Don't** use solid offset shadows on buttons or cards; the 3px solid layer belongs to the folder board alone.
- **Don't** set running text, or small stamps that carry information, in Stamp Rust on cream.
- **Don't** add a second folder or a feature-card grid; further sections are sheets and bands of the same file.
- **Don't** use photographic or bitmap textures; materials are generated in CSS.
