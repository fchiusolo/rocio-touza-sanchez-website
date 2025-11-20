# CLAUDE.md - AI Assistant Guide

## Project Overview

This is a **professional bilingual website** for psychologist **Rocío Touza Sanchez**, offering online therapy services with a focus on inclusive, culturally sensitive psychological care.

**Live Site**: https://rociotouzasanchez.com

**Project Type**: Single-page application (SPA) with bilingual support (Spanish/English)

**Hosting**: GitHub Pages with custom domain

---

## Technology Stack

| Technology | Purpose | Implementation |
|------------|---------|----------------|
| **HTML5** | Structure | Semantic HTML with accessibility features |
| **Tailwind CSS** | Styling | CDN-based v3.x with custom config |
| **Vanilla JavaScript** | Interactivity | Language switcher, mobile menu, smooth scrolling |
| **Jekyll** | Static site generation | GitHub Pages integration (minimal config) |
| **Google Fonts** | Typography | Playfair Display (headings) + Lato (body) |

### Why This Stack?
- **Zero build process**: No npm, webpack, or bundlers required
- **Fast deployment**: Push to GitHub = instant updates
- **Low maintenance**: No dependencies to update
- **SEO-friendly**: Static HTML with proper meta tags
- **CDN-optimized**: Tailwind and fonts load from CDN

---

## File Structure

```
├── index.html          # Main website (single-page app with all sections)
├── _config.yml         # Jekyll/GitHub Pages configuration
├── sitemap.xml         # SEO sitemap for search engines
├── robots.txt          # Search engine crawling rules
├── CNAME               # Custom domain configuration (rociotouzasanchez.com)
├── .gitignore          # Git ignore patterns (.DS_Store, editor files, etc.)
├── README.md           # Project documentation for developers
└── CLAUDE.md           # This file - AI assistant guide
```

### Missing Files (Placeholders in Code)
- `og-image.jpg` - Social media preview image (1200x630px recommended)
- `rocio-portrait.jpg` - Professional portrait photo
- **Doctoralia widget** - Calendar booking integration (placeholder in HTML)
- **Google Maps widget** - Location map (placeholder in HTML)
- **Contact form backend** - Form submission handler (currently non-functional)

---

## Architecture & Design

### Single-Page Application Structure

The website is organized into **5 main sections**, all in `index.html`:

1. **Hero Section** (`#inicio`) - Welcome message with CTA buttons
2. **About Section** (`#sobre-mi`) - Psychologist bio and approach
3. **Services Section** (`#servicios`) - 15 specialization areas with cards
4. **Online Therapy Section** (`#terapia-online`) - Session details, pricing, booking
5. **Contact Section** (`#contacto`) - Contact info, form, map placeholder

### Navigation System
- **Fixed top navigation** with smooth scroll offset (80px for nav height)
- **Mobile hamburger menu** for responsive design
- **Anchor links** to section IDs with smooth scrolling behavior
- **Language switcher** button (EN/ES toggle)

---

## Design System

### Color Palette (Custom Tailwind Config)

```javascript
colors: {
  'verde-agua': '#80CBC4',    // Primary brand color (teal/aqua)
  'off-white': '#F9F7F3',     // Background color (warm white)
  'navy': '#1D3557',          // Dark blue for text/headings
  'coral': '#FF6F61',         // Accent color for CTAs
  'dark-gray': '#333333'      // Body text color
}
```

### Typography

- **Headings**: `font-playfair` (Playfair Display - serif, elegant)
- **Body Text**: `font-lato` (Lato - sans-serif, readable)
- **Font Weights**: 300 (light), 400 (regular), 600 (semibold), 700 (bold)

### Spacing & Layout
- **Container**: `max-w-7xl mx-auto` (1280px max width, centered)
- **Section Padding**: `py-20` (80px vertical padding)
- **Grid System**: Tailwind's grid with `md:grid-cols-2` and `md:grid-cols-3`

### Component Patterns

#### Service Cards
```html
<div class="service-card bg-white rounded-2xl p-6 shadow-md">
  <!-- Icon circle -->
  <!-- Title -->
  <!-- Description -->
</div>
```
- Hover effect: `transform: translateY(-5px)` + shadow increase
- Icon: Circular colored background with SVG

#### Buttons
- **Primary CTA**: `bg-coral text-white rounded-full` (coral button)
- **Secondary**: `border-2 border-navy text-navy rounded-full` (outline)
- **WhatsApp Float**: Fixed bottom-right floating button

---

## Bilingual Implementation

### How It Works

1. **Language Storage**: `currentLang` variable in JavaScript (default: 'es')
2. **Data Attributes**: Every translatable element has `data-es` and `data-en`
3. **Toggle Logic**: Button click switches language and updates all elements
4. **HTML Lang**: Updates `<html lang="">` attribute for accessibility

### Example

```html
<h1 data-es="Un espacio seguro para tu bienestar emocional"
    data-en="A safe space for your emotional wellbeing">
    Un espacio seguro para tu bienestar emocional
</h1>
```

### Adding New Translatable Content

1. Add both `data-es` and `data-en` attributes
2. Set default content to Spanish text
3. Language switcher will handle toggling automatically

---

## Key Features & Functionality

### 1. Language Switcher (index.html:565-584)
- **Location**: Top navigation bar
- **Button**: Shows "EN" when Spanish is active, "ES" when English
- **Mechanism**: Query all `[data-es][data-en]` elements and update `textContent`

### 2. Mobile Menu (index.html:586-599)
- **Trigger**: Hamburger icon button
- **Behavior**: Toggle `hidden` class on mobile menu
- **Auto-close**: Clicking any link closes the menu

### 3. Smooth Scrolling (index.html:601-614)
- **Offset**: 80px to account for fixed navigation
- **All anchor links**: Handled via event delegation
- **Behavior**: Native CSS `scroll-behavior: smooth` + JS fallback

### 4. WhatsApp Float Button (index.html:556-562)
- **Position**: Fixed bottom-right
- **Responsive**: Shows text on desktop, icon-only on mobile
- **Link Format**: `https://wa.me/34XXXXXXXXX` (needs phone number)

### 5. SEO & Analytics

#### Structured Data (JSON-LD)
- Schema.org type: `Psychologist`
- Includes: name, location, price range, description, area served
- **Location**: index.html:47-67

#### Meta Tags
- **Description**: Optimized for "psicóloga online" keywords
- **Keywords**: LGTBIQ+, diversity, migration, anxiety, depression
- **Open Graph**: Social media preview (title, description, image URL)
- **Canonical URL**: https://rociotouzasanchez.com

#### Sitemap
- **File**: sitemap.xml
- **Pages**: Homepage + 4 anchor sections
- **Update Frequency**: Monthly
- **Priorities**: Homepage (1.0), Services (0.9), others (0.7-0.8)

---

## Development Workflows

### Local Development

**No build process required!**

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a simple HTTP server (optional, for testing)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Use Live Server (VS Code extension)
# Right-click index.html → "Open with Live Server"
```

### Making Content Changes

1. **Update text**: Edit HTML directly or modify data attributes
2. **Test locally**: Open index.html in browser
3. **Verify both languages**: Click language switcher to test translations
4. **Check responsive**: Use browser dev tools to test mobile/tablet views
5. **Commit changes**: Follow git workflow below

### Adding New Services

Services are in the `#servicios` section (index.html:232-329). To add a new service card:

```html
<div class="service-card bg-white rounded-2xl p-6 shadow-md">
    <div class="w-12 h-12 bg-verde-agua/20 rounded-full flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-verde-agua" fill="currentColor" viewBox="0 0 24 24">
            <!-- Icon path from Material Design Icons -->
        </svg>
    </div>
    <h3 class="text-xl font-playfair font-semibold text-navy mb-3"
        data-es="Título en español"
        data-en="Title in English">
        Título en español
    </h3>
    <p class="text-gray-600"
       data-es="Descripción en español."
       data-en="Description in English.">
        Descripción en español.
    </p>
</div>
```

**Icons**: Use [Material Design Icons](https://materialdesignicons.com/) SVG paths

### Testing Checklist

Before committing changes:

- [ ] All links work (test navigation, WhatsApp, email)
- [ ] Both languages display correctly
- [ ] Mobile menu opens/closes properly
- [ ] Smooth scrolling works on all anchor links
- [ ] Responsive design looks good (mobile, tablet, desktop)
- [ ] No console errors in browser dev tools
- [ ] Images load (if added)
- [ ] Accessibility: test with keyboard navigation
- [ ] Forms validate properly (when backend is implemented)

---

## Git Workflow

### Branch Naming Convention

This project uses **Claude-specific branch naming**:

```
claude/claude-md-{random-id}-{session-id}
```

**Example**: `claude/claude-md-mi7zlteavcbnttfn-012zoyx7dANMojFXEBsGBHrT`

**Important**: Branch names MUST start with `claude/` and end with the session ID, or pushes will fail with 403 error.

### Commit Message Guidelines

Use clear, descriptive commit messages:

```bash
# Good examples
git commit -m "Add contact form validation"
git commit -m "Update service descriptions for clarity"
git commit -m "Fix mobile menu z-index issue"
git commit -m "Add Google Analytics integration"

# Bad examples (avoid)
git commit -m "updates"
git commit -m "fix"
git commit -m "changes"
```

### Deployment Process

1. **Make changes** on your feature branch
2. **Test locally** (open index.html in browser)
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Descriptive message"
   ```
4. **Push to remote**:
   ```bash
   git push -u origin claude/your-branch-name
   ```
5. **GitHub Pages** automatically deploys from the main branch
6. **Merge to main** when ready for production

**Note**: Direct pushes to main may be restricted. Use pull requests for production deployments.

---

## Integrations (To Be Configured)

### 1. WhatsApp Integration

**Current Status**: Placeholder phone number (`+34XXXXXXXXX`)

**To Configure**:
1. Replace all instances of `34XXXXXXXXX` with actual phone number
2. Format: `34` (country code) + `9-digit phone number` (no spaces/dashes)
3. Locations to update:
   - index.html:453 (contact section link)
   - index.html:557 (floating button)
   - index.html:542 (footer contact info)

### 2. Doctoralia Calendar Widget

**Current Status**: Placeholder box (index.html:404-411)

**To Configure**:
1. Get widget code from Doctoralia account
2. Replace placeholder `<div>` with actual `<iframe>` or embed code
3. Test booking flow thoroughly

### 3. Google Maps Integration

**Current Status**: Placeholder box (index.html:471-477)

**To Configure**:
1. Get embed code from Google Maps
2. Search for business location in Google Maps
3. Click "Share" → "Embed a map" → Copy HTML
4. Replace placeholder with `<iframe>` code

### 4. Contact Form Backend

**Current Status**: Non-functional form (index.html:481-503)

**Options for Implementation**:

**Option A: Formspree** (Easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option B: Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
```

**Option C: Custom Backend**
- Create serverless function (Netlify Functions, Vercel, AWS Lambda)
- Handle POST request, validate, send email
- Add CSRF protection

### 5. Google Analytics

**Current Status**: Commented out (index.html:616-626)

**To Configure**:
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (format: `G-XXXXXXXXXX`)
3. Uncomment lines 624-626
4. Replace `GA_MEASUREMENT_ID` with your actual ID
5. Uncomment gtag config in lines 617-620

---

## SEO Optimization

### Current SEO Features

- ✅ Semantic HTML5 structure
- ✅ Meta description and keywords
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (Schema.org)
- ✅ Sitemap.xml with proper priorities
- ✅ Robots.txt allowing all crawlers
- ✅ Mobile-responsive design
- ✅ Fast loading (CDN assets, minimal JS)
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text placeholders for images
- ✅ Canonical URL configuration

### SEO Maintenance Tasks

**When updating content**:
1. Update `<meta name="description">` if main focus changes
2. Update JSON-LD structured data for business info changes
3. Update `sitemap.xml` lastmod dates when sections change
4. Update Open Graph image when adding og-image.jpg

**Performance optimization**:
- Images: Use WebP format, optimize to <200KB
- Fonts: Already optimized with `font-display: swap`
- Scripts: Minimal vanilla JS, no heavy frameworks

---

## Accessibility (a11y) Features

### Current Implementation

- ✅ Semantic HTML (nav, section, footer, etc.)
- ✅ `lang` attribute on `<html>` (updates with language switcher)
- ✅ ARIA labels on interactive elements (e.g., WhatsApp button)
- ✅ Keyboard navigation support (smooth scroll works with Enter key)
- ✅ Sufficient color contrast ratios
- ✅ Responsive text sizing
- ✅ Focus states on interactive elements

### Accessibility Improvements Needed

- ⚠️ Add alt text to images when they're added
- ⚠️ Add ARIA labels to mobile menu button
- ⚠️ Add skip-to-content link for keyboard users
- ⚠️ Test with screen readers (NVDA, JAWS, VoiceOver)
- ⚠️ Add form validation messages for contact form

---

## Content Management

### Updating Text Content

All text is directly in `index.html`. To update:

1. **Find the section** using HTML comments or IDs
2. **Update both languages** (data-es and data-en attributes)
3. **Update default text** (the text between tags, should match data-es)

**Example**:
```html
<!-- Change pricing from 60€ to 70€ -->
<p class="text-gray-700"
   data-es="70€ por sesión. Posibilidad de adaptar la frecuencia según tus necesidades."
   data-en="€70 per session. Possibility to adjust frequency according to your needs.">
   70€ por sesión. Posibilidad de adaptar la frecuencia según tus necesidades.
</p>
```

### Updating Contact Information

**Email**: Search for `contacto@rociotouzasanchez.com` and replace (3 locations)

**Phone**: Search for `+34 XXX XXX XXX` and replace (3 locations)

**Location**: Search for `Barcelona, España` if changing city

**Professional ID**: Line 550 - `Psicóloga colegiada núm. XXXXX`

### Adding Images

**Professional Portrait**:
1. Add `rocio-portrait.jpg` to root directory
2. Replace placeholder div (index.html:193-202) with:
```html
<img src="rocio-portrait.jpg" alt="Rocío Touza Sanchez - Psicóloga"
     class="rounded-3xl shadow-lg w-full">
```

**Social Media Preview**:
1. Add `og-image.jpg` (1200x630px) to root directory
2. Already referenced in meta tags (index.html:18)

---

## Common Tasks for AI Assistants

### Task: Update Service Descriptions

1. Navigate to services section (index.html:232-329)
2. Locate the specific service card
3. Update `data-es` and `data-en` attributes
4. Maintain HTML structure and Tailwind classes

### Task: Change Color Scheme

1. Modify Tailwind config (index.html:22-40)
2. Update color variables in `extend.colors`
3. Search and replace color class names if needed
4. Test contrast ratios for accessibility

### Task: Add New Section

1. Choose location between existing sections
2. Create section with unique `id` attribute
3. Add navigation link in nav menu (desktop + mobile)
4. Include bilingual data attributes
5. Match spacing pattern (`py-20` for sections)
6. Update sitemap.xml with new anchor link

### Task: Fix Responsive Issues

1. Open browser dev tools (F12)
2. Toggle device toolbar (mobile view)
3. Test breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
4. Use Tailwind responsive prefixes: `md:`, `lg:`, `xl:`
5. Check mobile menu functionality

### Task: Optimize for SEO

1. **Keywords**: Update meta keywords and description (index.html:10)
2. **Structured Data**: Update JSON-LD (index.html:47-67)
3. **Sitemap**: Update lastmod dates in sitemap.xml
4. **Headings**: Ensure proper H1-H6 hierarchy
5. **Links**: Check all internal and external links work

---

## Code Conventions & Best Practices

### HTML

- **Indentation**: 4 spaces
- **Attributes**: Double quotes always
- **IDs**: Use kebab-case (`#sobre-mi`, `#terapia-online`)
- **Classes**: Tailwind utility classes in logical order (layout → spacing → colors → typography)
- **Comments**: Use HTML comments to mark major sections

### CSS (Tailwind)

- **Custom Styles**: Only in `<style>` tag (index.html:69-111)
- **Avoid Inline Styles**: Use Tailwind utilities instead
- **Responsive Design**: Mobile-first, use `md:` and `lg:` prefixes
- **Hover States**: Use `hover:` prefix for interactive elements

### JavaScript

- **Style**: ES6+ syntax
- **Selectors**: Use `getElementById` for performance
- **Event Listeners**: Attach once, avoid memory leaks
- **No Dependencies**: Pure vanilla JS, no jQuery or frameworks

### Git

- **Branch Names**: Always start with `claude/`
- **Commits**: Descriptive messages, present tense
- **Pull Requests**: Include description of changes and testing done

---

## Troubleshooting

### Issue: Language Switcher Not Working

**Symptoms**: Clicking EN/ES button doesn't change text

**Solutions**:
1. Check browser console for JavaScript errors
2. Verify all elements have both `data-es` and `data-en` attributes
3. Ensure language switcher script is not blocked
4. Clear browser cache

### Issue: Mobile Menu Stuck Open/Closed

**Symptoms**: Hamburger icon doesn't toggle menu

**Solutions**:
1. Check `mobileMenuBtn` and `mobileMenu` IDs exist
2. Verify JavaScript is loaded (check console)
3. Test `classList.toggle('hidden')` in console
4. Check z-index conflicts with other elements

### Issue: Smooth Scrolling Not Working

**Symptoms**: Clicking nav links jumps instead of smooth scrolling

**Solutions**:
1. Verify CSS `scroll-behavior: smooth` is set on `html`
2. Check JavaScript scroll event listener is attached
3. Ensure offset calculation (80px) is correct for nav height
4. Test in different browsers (Safari, Chrome, Firefox)

### Issue: Images Not Loading

**Symptoms**: Broken image icons or missing visuals

**Solutions**:
1. Check file names match exactly (case-sensitive on Linux/Mac)
2. Verify images are in root directory (same level as index.html)
3. Check file permissions (should be readable)
4. Use browser dev tools Network tab to see 404 errors

### Issue: Forms Not Submitting

**Symptoms**: Contact form doesn't send emails

**Expected**: Form is currently non-functional (no backend)

**Solutions**:
1. Implement backend (Formspree, Netlify Forms, or custom)
2. Add `action` and `method` attributes to `<form>`
3. Configure email delivery service
4. Test with valid email addresses

### Issue: Git Push Fails (403 Error)

**Symptoms**: `git push` returns 403 Forbidden

**Solutions**:
1. Verify branch name starts with `claude/`
2. Check branch name ends with correct session ID
3. Try: `git push -u origin HEAD`
4. Verify repository permissions

---

## Performance Optimization

### Current Performance

**Strengths**:
- ✅ No build step = instant deploys
- ✅ CDN-hosted assets (Tailwind, Google Fonts)
- ✅ Minimal JavaScript (~60 lines)
- ✅ No external dependencies
- ✅ Static HTML (fast server response)

**Opportunities for Improvement**:
- ⚠️ Add image optimization (WebP, lazy loading)
- ⚠️ Inline critical CSS (Tailwind utilities used)
- ⚠️ Add service worker for offline support
- ⚠️ Implement font subsetting (only needed glyphs)
- ⚠️ Minify HTML/CSS/JS for production

### Performance Monitoring

**Tools to Use**:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)
- Chrome DevTools Lighthouse

**Target Metrics**:
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

---

## Security Considerations

### Current Security Posture

**Good Practices**:
- ✅ Static HTML (no server-side vulnerabilities)
- ✅ HTTPS enforced via GitHub Pages + custom domain
- ✅ No sensitive data in codebase
- ✅ No authentication/authorization (not needed)

**Risks to Mitigate (When Adding Features)**:

1. **Contact Form**:
   - Risk: Spam, injection attacks
   - Mitigation: Add CSRF token, rate limiting, reCAPTCHA

2. **Analytics**:
   - Risk: PII leakage
   - Mitigation: Anonymize IPs, follow GDPR

3. **Third-Party Widgets**:
   - Risk: XSS, data leaks
   - Mitigation: Use CSP headers, validate embed codes

---

## Future Enhancements

### High Priority

- [ ] Add professional portrait image
- [ ] Configure WhatsApp with real phone number
- [ ] Implement contact form backend
- [ ] Add Google Analytics
- [ ] Integrate Doctoralia booking widget
- [ ] Add Google Maps location widget

### Medium Priority

- [ ] Add blog section for SEO content
- [ ] Implement FAQ section (accordion component)
- [ ] Add testimonials/reviews section
- [ ] Create newsletter signup
- [ ] Add social media links (if applicable)
- [ ] Implement cookie consent banner (GDPR)

### Low Priority

- [ ] Dark mode toggle
- [ ] Print stylesheet for CV/resume
- [ ] Downloadable resources (PDFs)
- [ ] Video introduction/welcome message
- [ ] Multilingual support beyond ES/EN (e.g., Catalan)

---

## Resources & Documentation

### Tailwind CSS
- [Documentation](https://tailwindcss.com/docs)
- [Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Custom Configuration](https://tailwindcss.com/docs/configuration)

### Icons
- [Material Design Icons](https://materialdesignicons.com/) (currently used)
- [Heroicons](https://heroicons.com/) (alternative)
- [Font Awesome](https://fontawesome.com/) (alternative)

### SEO
- [Google Search Console](https://search.google.com/search-console)
- [Schema.org](https://schema.org/Psychologist) (structured data)
- [Open Graph Protocol](https://ogp.me/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)

### GitHub Pages
- [Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Jekyll Configuration](https://jekyllrb.com/docs/configuration/)

---

## Contact & Support

**Website Owner**: Rocío Touza Sanchez
**Email**: contacto@rociotouzasanchez.com
**Domain**: rociotouzasanchez.com
**Repository**: fchiusolo/rocio-touza-sanchez-website

**For AI Assistants**: When working on this project, always:
1. Test changes locally before committing
2. Verify both language versions (ES/EN)
3. Check responsive design on mobile
4. Follow git branch naming conventions
5. Write descriptive commit messages
6. Maintain existing code style and conventions

---

**Last Updated**: November 20, 2024
**Version**: 1.0.0
**Maintained By**: Claude AI Assistant
