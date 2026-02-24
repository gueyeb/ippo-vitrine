# GEMINI.md - Ippo Vitrine

## Project Overview
**Ippo Vitrine** is a minimalist, performant landing page (showcase site) for the **Ippo** mobile application. It is designed to provide potential users with an overview of the app's features, screenshots, and legal information (Privacy Policy).

The mobile app itself is a "Privacy-First" walking tracker that stores all data (GPS, steps, sessions) locally on the user's device.

## Technical Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** JavaScript (JSX)
- **Styling:** Vanilla CSS (`src/styles.css`). Uses CSS variables for theming and a glassmorphism effect for the header and sections.
- **Routing:** Custom hash-based routing (`#/` for home, `#/privacy` for privacy policy) implemented in `src/App.jsx`.

## Project Structure
- `public/`: Static assets (logos, splash screens, screenshots).
- `src/App.jsx`: Main entry point containing the layout, home page, and privacy policy page logic.
- `src/content/policyData.js`: Data structure for the Privacy Policy content.
- `src/styles.css`: Global styles for the entire vitrine. Includes design tokens like `--accent`, `--surface`, etc.
- `index.html`: Main HTML template.

## Commands

### Development
```bash
npm install
npm run dev
```
Starts the development server with Hot Module Replacement (HMR).

### Production Build
```bash
npm run build
```
Generates a production-ready bundle in the `dist/` directory.

### Preview Build
```bash
npm run preview
```
Serves the production build locally for testing.

## Development Conventions & Guidelines
- **Privacy First:** The vitrine must reflect the app's commitment to privacy. No tracking scripts or external analytics should be added without careful consideration.
- **Routing:** Use hash-based routing (`window.location.hash`) for simple deployment (e.g., GitHub Pages) without server-side configuration.
- **Responsive Design:** The site is mobile-first. Ensure all sections (Hero, Grid, Tables) scale correctly on smaller screens.
- **Assets:** Screenshots should be stored in `public/screenshots/` and referenced via absolute paths (e.g., `/screenshots/filename.svg`).

## Customization Checklist (TODO)
Before deploying to production, the following must be updated:
1.  **Download Links:** Update the `href` attributes for App Store and Google Play in the `Hero` component in `src/App.jsx` (around lines 100-105).
2.  **Screenshots:** Replace the placeholder SVGs in `public/screenshots/` with actual app screenshots.
3.  **Contact Email:** Update the contact email address in `src/content/policyData.js` (line 104).
4.  **Logo/Branding:** Ensure `logo-ippo.png` and `splashscreen-ippo.png` are the final versions.
