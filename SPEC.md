# ExDev Agency - Neon Monolith Single-Page Application

## Concept & Vision

A stark, brutalist-meets-cyberpunk landing page that exudes technical precision and raw power. The "Neon Monolith" aesthetic creates an atmosphere of cutting-edge technology wrapped in darkness—think Blade Runner's neon-soaked noir meets Swiss minimalism. Every element feels deliberate, heavy, and unstoppable.

## Design Language

### Aesthetic Direction
Brutalist cyberpunk with sharp geometric forms. The dark void background makes neon accents feel electric and precious. Zero border-radius for that industrial edge.

### Color Palette
- **Background**: `#0B0B0F` (void black)
- **Surface**: `#111118` (elevated black)
- **Accent**: `#00FF9C` (neon mint)
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A1A1AA` (zinc-400)
- **Border**: `#1F1F2E`

### Typography
- **Headings**: Space Grotesk (700 weight)
- **Body**: Inter (400, 500 weights)
- Scale: 14px base, 1.5 line-height

### Spatial System
- Base unit: 8px
- Section padding: 64px vertical (mobile), 96px (desktop)
- Card padding: 24px
- Gap: 16px (mobile), 24px (desktop)

### Motion Philosophy
- Subtle glow transitions on hover (0.3s ease)
- Form focus states with box-shadow animation
- Success state fade-in (0.4s)
- No excessive animation—precision over playfulness

### Visual Assets
- Abstract CSS "X" logo using gradients and transforms
- Geometric accent lines using borders
- No images or external assets except Google Fonts

## Layout & Structure

### Mobile (320px-480px)
- Single column, full-width
- Vertical rhythm with 64px section gaps
- Stacked service cards

### Tablet (768px+)
- 2-column grid for services
- Increased typography scale

### Desktop (1024px+)
- 4-column service grid
- Max-width container (1200px)
- Enhanced spacing

## Features & Interactions

### Hero Section
- Large headline with gradient text effect
- Abstract neon X using CSS clip-path and gradients
- CTA button with glow hover state

### Services Section
- Card hover: subtle border glow
- Icon using Unicode symbols or CSS shapes
- Grid layout with responsive breakpoints

### Metrics Section
- Large number display with accent color
- Minimal, scannable layout

### Contact Form
- Floating label inputs (label moves up on focus/fill)
- Input focus: accent border + glow shadow
- Validation: red border on error, inline message
- Submit: loading state with spinner, then success

### Success State
- Form fades out, success message fades in
- Checkmark icon using CSS
- "We'll be in touch" message

## Component Inventory

### Button
- Default: transparent with accent border
- Hover: accent background, text inverts
- Focus: glow shadow
- Disabled: reduced opacity

### Card (Service)
- Default: surface background, subtle border
- Hover: border glows with accent color
- Contains: icon, title, description

### Input Field
- Default: transparent with bottom border
- Focus: accent color, floating label visible
- Error: red border, error message below
- Filled: label stays floating

### Section Container
- Max-width: 1200px
- Centered with auto margins
- Responsive padding

## Technical Approach

- Single HTML file with embedded `<style>` and `<script>`
- CSS custom properties for theming
- Vanilla JavaScript, no dependencies
- CSS Grid and Flexbox for layout
- Intersection Observer for scroll effects (optional)
- Form validation using Constraint Validation API
- Async/await for form submission simulation
