---
name: Organic Precision
colors:
  surface: '#f7fafa'
  surface-dim: '#d7dbda'
  surface-bright: '#f7fafa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f4'
  surface-container: '#ebeeee'
  surface-container-high: '#e6e9e9'
  surface-container-highest: '#e0e3e3'
  on-surface: '#181c1d'
  on-surface-variant: '#3f4949'
  inverse-surface: '#2d3131'
  inverse-on-surface: '#eef1f1'
  outline: '#6f797a'
  outline-variant: '#bec8c9'
  surface-tint: '#01696f'
  primary: '#004f54'
  on-primary: '#ffffff'
  primary-container: '#01696f'
  on-primary-container: '#97e6ec'
  inverse-primary: '#85d3da'
  secondary: '#ae2f34'
  on-secondary: '#ffffff'
  secondary-container: '#ff6b6b'
  on-secondary-container: '#6d0010'
  tertiary: '#6e3815'
  on-tertiary: '#ffffff'
  tertiary-container: '#8b4f2a'
  on-tertiary-container: '#ffceb5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a1f0f6'
  primary-fixed-dim: '#85d3da'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410006'
  on-secondary-fixed-variant: '#8c1520'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68d'
  on-tertiary-fixed: '#331200'
  on-tertiary-fixed-variant: '#6e3815'
  background: '#f7fafa'
  on-background: '#181c1d'
  surface-variant: '#e0e3e3'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  sidebar_width: 240px
  header_height: 60px
  grid_unit: 8px
  container_max_width: 1440px
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is built on the intersection of clinical precision and organic wellness. It adopts a **Modern SaaS** aesthetic, drawing inspiration from high-end fintech and health-tech platforms. The visual language emphasizes clarity, trust, and intelligence, ensuring that complex dietary data feels accessible and actionable.

The style avoids unnecessary ornamentation, focusing instead on structural integrity and rhythmic spacing. By utilizing a restrained color palette and a strict 8px grid, the UI evokes a sense of calm authority—positioning the platform as a sophisticated tool for health management rather than a generic fitness app. The emotional response is one of reliability, focus, and modern cleanliness.

## Colors

The color strategy uses high-contrast functional colors set against a sophisticated, warm neutral foundation. The **Deep Green** primary color establishes a connection to health and nature, while the **Warm Off-white** background prevents the UI from feeling sterile or clinical.

**Coral** is reserved strictly for accents and high-priority calls to action, providing a vibrant counterpoint to the primary green. **Success Green** is used for positive feedback and completion states. Dark mode transitions the warm neutrals into deep charcoal tones while maintaining the primary and accent hues for brand consistency, ensuring the same level of sophistication in low-light environments.

## Typography

The typography utilizes **Manrope**, a modern geometric sans-serif that balances technicality with friendliness. The hierarchy is intentionally tight, with a maximum heading size of 36px to maintain the "Linear-inspired" compact aesthetic.

Body text is set at a highly readable 16px to ensure accessibility for health-conscious users across all age demographics. Headings utilize a tighter line-height and slight negative letter-spacing to create a distinctive, editorial "lockup" look, while labels and data points use medium-to-bold weights to facilitate quick scanning of nutritional information.

## Elevation & Depth

Depth in this design system is achieved through subtle tonal shifts and soft, ambient shadows rather than heavy borders or gradients. Surfaces are layered to represent priority:

1.  **Background:** The base warm off-white.
2.  **Surface:** Card layers using the slightly lighter Surface Card color.
3.  **Elevation:** A single, subtle shadow style (0px 2px 4px rgba(40, 37, 29, 0.05)) is applied to cards to lift them from the background.

There are no heavy "drop shadows" or physical metaphors. The depth is "low-profile," maintaining a flat SaaS aesthetic while providing enough visual separation to distinguish interactive modules from the background.

## Shapes

The shape language is defined by a consistent **12px (0.75rem)** border radius for all primary containers, cards, and input fields. This moderate roundedness softens the geometric grid, making the platform feel approachable without losing its professional edge. 

Buttons and smaller UI elements like badges follow this same logic, creating a unified visual rhythm. No circular buttons or pill shapes are used, except for specialized toggle components, to maintain the architectural, card-based layout.

## Components

### Buttons
Buttons are solid and flat, using the Primary Deep Green for main actions and the Accent Coral for specific high-priority triggers. There are no gradients. The text is centered, bold, and uses the 14px label style. Secondary buttons use a subtle outline or a ghost style with the Text Dark warm gray.

### Cards
Cards are the primary organizational unit. They use the Surface color (#F9F8F5), have a 12px radius, and a subtle shadow. To maintain the clean aesthetic, cards **do not** have colored side borders or heavy outlines. Content within cards is padded by 24px (3x grid units).

### Icons
Icons utilize the **Lucide** set, outlined at 20px. Icons should never be enclosed in colored circles; they should stand alone with their stroke color reflecting their function (Primary for navigation, Coral for alerts).

### Inputs & Controls
Input fields use the Surface color with a subtle 1px border in a lighter shade of the text color. Checkboxes and radio buttons are square with 4px radius, using the Primary color for the checked state. 

### Chips & Lists
Chips are used for dietary tags (e.g., "Keto", "High Protein") and are styled with a neutral background and dark warm gray text. Lists should be clean with 1px horizontal dividers, using the 8px grid to define vertical spacing between items.