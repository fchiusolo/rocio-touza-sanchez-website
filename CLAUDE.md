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
| **Open Sans Variable Font** | Typography | Self-hosted variable font (weights 300-800) |

### Why This Stack?
- **Zero build process**: No npm, webpack, or bundlers required
- **Fast deployment**: Push to GitHub = instant updates
- **Low maintenance**: No dependencies to update
- **SEO-friendly**: Static HTML with proper meta tags
- **Privacy-first**: Self-hosted fonts, no external tracking
- **CDN-optimized**: Tailwind loads from CDN (fonts are local)

---

## File Structure

```
├── index.html                  # Spanish homepage (root domain)
├── politica-privacidad.html    # Spanish privacy policy page
├── /en/                        # English language directory
│   ├── index.html              # English homepage
│   └── privacy-policy.html     # English privacy policy page
├── _config.yml                 # Jekyll/GitHub Pages configuration
├── sitemap.xml                 # Bilingual sitemap for search engines
├── robots.txt                  # Search engine crawling rules
├── CNAME                       # Custom domain configuration (rociotouzasanchez.com)
├── .gitignore                  # Git ignore patterns (.DS_Store, editor files, etc.)
├── README.md                   # Project documentation for developers
├── ROADMAP.md                  # Project roadmap and improvement plan
├── CLAUDE.md                   # This file - AI assistant guide
├── TESTING-REPORT.md           # Multilingual implementation testing report
├── /fonts/                     # Self-hosted font files (privacy-first)
│   ├── OpenSans-VariableFont_wdth,wght.ttf
│   └── OpenSans-Italic-VariableFont_wdth,wght.ttf
└── /images/                    # Image assets
    ├── logo.png                # Professional logo
    └── portrait.jpeg           # Professional portrait photo
```

### Missing Files
- `og-image.jpg` - Social media preview image (1200x630px recommended) - still needed for Open Graph tags

### Multilingual Structure
- **Spanish (Primary)**: All files at root level (`/index.html`, `/politica-privacidad.html`)
- **English**: All files in `/en/` subdirectory (`/en/index.html`, `/en/privacy-policy.html`)
- **SEO**: Each language version has proper hreflang tags and unique meta descriptions
- **Sitemap**: Bilingual sitemap lists all language versions

---

## Architecture & Design

### Single-Page Application Structure

The website is organized into **5 main sections**, all in `index.html`:

1. **Hero Section** (`#inicio`) - Welcome message with CTA buttons and session info
2. **About Section** (`#sobre-mi`) - Psychologist bio, credentials, and therapeutic approach
3. **Services Section** (`#servicios`) - Specialization areas with detailed service cards
4. **Modalidades Section** (`#modalidades`) - Online and in-person therapy options, session details, pricing
5. **FAQ Section** (`#faq`) - Frequently asked questions (12 common questions)

**Note**: Contact information appears in the footer, not as a separate section. The contact form was intentionally removed in favor of direct WhatsApp booking to reduce friction in the user journey.

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
  'forest-green': '#4D7C6A',  // Primary brand color (buttons, hover states, accent)
  'cream': '#F5F3E5',         // Background color (warm, neutral base)
  'navy': '#1D3557',          // Dark blue for text and headings
  'sage': '#93ADA1',          // Secondary accent color (subtle highlights)
  'dark-gray': '#333333'      // Body text color
}
```

### Typography

- **All Text**: Open Sans Variable Font (self-hosted from `/fonts/` directory)
- **Font Classes**: `font-playfair`, `font-open-sans`, and `font-sans` all map to Open Sans
- **Font Weights**: Variable font supports 300-800 (light to extra bold)
- **Font Styles**: Both regular and italic variants available
- **Fallback Stack**: `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Helvetica`, `Arial`, `sans-serif`
- **Privacy**: Self-hosted (no Google Fonts CDN) to avoid external tracking

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
- **Primary CTA**: `bg-forest-green text-white rounded-full` (forest green button)
- **Secondary**: `border-2 border-navy text-navy rounded-full` (outline)
- **WhatsApp Float**: Fixed bottom-right floating button with forest green background
- **Hover States**: Buttons use `hover:bg-opacity-90` or `transform: scale(1.05)` for interaction feedback

---

## Bilingual Implementation

### Architecture: Separate Files Strategy

The website uses a **separate-file multilingual architecture** with dedicated URLs for each language:

- **Spanish (Primary)**: `/index.html` - Root domain
- **English**: `/en/index.html` - English subdirectory
- **Privacy Policies**: `/politica-privacidad.html` (Spanish), `/en/privacy-policy.html` (English)

### How It Works

1. **Separate HTML Files**: Each language has its own complete HTML file
2. **URL-Based Navigation**: Language switcher uses hyperlinks (not JavaScript)
3. **SEO-Optimized**: Proper hreflang tags signal language versions to search engines
4. **No Data Attributes**: Pure single-language content (no `data-es`/`data-en`)

### Language Switcher

**Spanish Version** (`/index.html`):
```html
<a href="/en/" class="px-4 py-2 bg-cream rounded-full">
    <span class="font-bold text-forest-green">ES</span>
    <span class="text-gray-400 mx-2">|</span>
    <span class="text-gray-400">EN</span>
</a>
```

**English Version** (`/en/index.html`):
```html
<a href="/" class="px-4 py-2 bg-cream rounded-full">
    <span class="text-gray-400">ES</span>
    <span class="text-gray-400 mx-2">|</span>
    <span class="font-bold text-forest-green">EN</span>
</a>
```

### Adding New Translatable Content

1. **Update Spanish version**: Edit `/index.html` with Spanish text
2. **Update English version**: Edit `/en/index.html` with English text
3. **Maintain structure**: Keep HTML structure identical between versions
4. **No attributes needed**: Just plain text content in each language

---

## Key Features & Functionality

### 1. Language Switcher
- **Location**: Top navigation bar (desktop + mobile menu)
- **Type**: URL-based hyperlink (not JavaScript toggle)
- **Spanish Version**: Link to `/en/` - Shows "ES" as active (bold, green)
- **English Version**: Link to `/` - Shows "EN" as active (bold, green)
- **Mechanism**: Simple navigation - no JavaScript required

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
    <div class="w-12 h-12 bg-forest-green/20 rounded-full flex items-center justify-center mb-4">
        <svg class="w-6 h-6 text-forest-green" fill="currentColor" viewBox="0 0 24 24">
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

This project uses **descriptive branch naming**:

```
claude/{descriptive-name}
```

**Examples**:
- `claude/add-roadmap`
- `claude/ux-improvements-reduce-friction`
- `claude/remove-contact-form`
- `claude/update-color-palette`

**Important**: Branch names MUST start with `claude/` to maintain consistency and enable proper access controls.

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

1. **Create feature branch** from main:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b claude/descriptive-name
   ```

2. **Make changes** on your feature branch

3. **Test locally** (open index.html in browser)

4. **Commit changes**:
   ```bash
   git add .
   git commit -m "Descriptive message"
   ```

5. **Push to remote**:
   ```bash
   git push -u origin claude/your-branch-name
   ```

6. **Create Pull Request** (see PR creation section below)

7. **Wait for approval** - Main branch is protected, requires PR approval

8. **After merge** - GitHub Pages automatically deploys from main branch

**IMPORTANT**:
- ⛔ **Main branch is PROTECTED** - Direct pushes are blocked
- ✅ **All changes require Pull Requests** with approval
- ✅ **Always work on feature branches** starting with `claude/`

---

## Integrations

### ✅ WhatsApp Integration (CONFIGURED)

**Status**: Fully integrated and functional

**Implementation**:
- Direct WhatsApp booking links throughout the site
- Floating WhatsApp button (bottom-right, fixed position)
- Pre-filled message templates for user convenience
- Mobile-optimized with responsive design

**Link Format**: `https://wa.me/[COUNTRY_CODE][PHONE_NUMBER]?text=[MESSAGE]`

**Locations**:
- Navigation bar "Reservar" button
- Hero section CTA buttons
- Floating action button
- Footer contact section

**UX Decision**: WhatsApp-only booking was chosen to minimize friction. Contact forms were intentionally removed to streamline the user journey directly to conversation.

### ❌ Google Analytics (NOT IMPLEMENTED)

**Status**: Intentionally not using analytics

**Reason**: Privacy-first approach. The website uses NO tracking, cookies, or analytics to respect user privacy and comply with GDPR/LOPD without requiring cookie consent banners.

**Alternative**: For traffic insights, use server logs or privacy-respecting alternatives if needed (e.g., Plausible Analytics, self-hosted Matomo).

### 📄 Privacy Policy Pages (IMPLEMENTED)

**Status**: Fully implemented

**Files**:
- `/privacy-policy.html` - English version
- `/politica-privacidad.html` - Spanish version

**Content**: Details data handling, user rights under GDPR/LOPD, and confirms cookie-free browsing experience.

---

## SEO Optimization

### Current SEO Features

- ✅ Semantic HTML5 structure
- ✅ Meta description and keywords
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (Schema.org Psychologist type)
- ✅ Sitemap.xml with proper priorities
- ✅ Robots.txt allowing all crawlers
- ✅ Mobile-responsive design
- ✅ Fast loading (self-hosted fonts, minimal JS)
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Alt text for images
- ✅ Canonical URL configuration
- ✅ Privacy policy pages (bilingual)
- ✅ Cookie-free (no analytics tracking = better privacy compliance)

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

**Email**: Search for `info@example.com` placeholder and replace with actual email (multiple locations in index.html)

**Phone**: Search for `+34 XXX XXX XXX` placeholder and replace with actual phone (multiple locations)

**Location**: Update `Barcelona, España` if changing city (index.html, JSON-LD structured data)

**Professional ID**: Update `XXXXX` placeholder with actual colegiada number

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
- **IDs**: Use kebab-case (`#sobre-mi`, `#modalidades`)
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
- ✅ Self-hosted fonts (no third-party CDN tracking)
- ✅ No analytics or tracking scripts
- ✅ Privacy-first architecture

**Future Considerations** (if adding features):
- If adding third-party services: Validate embed codes, use CSP headers
- If adding forms: Implement CSRF protection, rate limiting
- If adding analytics: Use privacy-respecting alternatives (Plausible, Matomo)

---

## Privacy & Cookie Policy

### Cookie-Free Implementation

This website is intentionally designed with **zero cookies and zero tracking**:

**What We DON'T Use**:
- ❌ Google Analytics or any analytics platform
- ❌ Cookie consent banners (not needed!)
- ❌ Third-party tracking pixels
- ❌ Session cookies for browsing
- ❌ Marketing/advertising cookies
- ❌ Social media tracking scripts

**Why Cookie-Free?**:
- **Privacy-first**: Users can browse anonymously
- **GDPR/LOPD Compliance**: No cookie consent required
- **Performance**: Faster page loads without tracking scripts
- **Trust**: Demonstrates commitment to user privacy

### Privacy Policy Pages

**Files**:
- `/privacy-policy.html` - English version
- `/politica-privacidad.html` - Spanish version

**Content Covered**:
- Data controller information
- What data is collected (minimal: only name/email for therapy sessions via Google Meet)
- Legal basis for processing (consent, legitimate interest)
- User rights under GDPR/LOPD (access, rectification, deletion, portability)
- How to exercise rights
- Data retention policies
- Third-party processors (Google Meet for video sessions)

**Key Point**: Website browsing generates NO data collection. Only therapy clients who book sessions provide personal information.

### Philosophy

**Privacy-First Development**:
1. Only collect data absolutely necessary for service delivery
2. No passive tracking of website visitors
3. Transparent about what data is collected and why
4. Self-hosted assets to avoid external tracking
5. Easy for users to exercise their privacy rights

---

## Future Enhancements

**Note**: See `ROADMAP.md` for the complete improvement plan with priorities and GitHub issues.

### Completed ✅

- ✅ Add professional portrait image (exists as `images/portrait.jpeg`)
- ✅ Configure WhatsApp integration
- ✅ Implement FAQ section (12 questions)
- ✅ Privacy policy pages (bilingual)

### Still Needed

**High Priority** (see ROADMAP.md for details):
- [ ] Photo session for improved professional images
- [ ] Copywriting review and content refinement
- [ ] Color palette adjustments (if needed based on user feedback)
- [ ] SEO optimization (Barcelona-focused keywords, structured data improvements)
- [ ] Google Business Profile optimization
- [ ] Submit to professional directories (Doctoralia, Top Doctors, etc.)

**Medium Priority**:
- [ ] Add testimonials/reviews section
- [ ] Blog/articles section for SEO content
- [ ] Social media links (if business strategy evolves)

**Low Priority**:
- [ ] Dark mode toggle
- [ ] Downloadable resources (therapy worksheets, PDFs)
- [ ] Video introduction/welcome message
- [ ] Additional language support (e.g., Catalan)

### Explicitly NOT Planned

- ❌ Google Analytics (conflicts with privacy policy)
- ❌ Contact forms (WhatsApp-only booking by design)
- ❌ Cookie consent banners (not needed, cookie-free site)
- ❌ Doctoralia widget (directory listing yes, widget no)
- ❌ Google Maps embed (privacy concern, just show address)

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

**Website Owner**: Rocío Touza Sanchez (Professional Psychologist)
**Domain**: https://rociotouzasanchez.com
**Repository**: fchiusolo/rocio-touza-sanchez-website

**For Contact Information**: Visit the live website for current contact details (email, phone, booking links).

**For AI Assistants**: When working on this project, always:
1. Test changes locally before committing
2. Verify both language versions (ES/EN)
3. Check responsive design on mobile (< 768px, 768-1024px, > 1024px)
4. Follow git branch naming convention: `claude/{descriptive-name}`
5. Write descriptive commit messages
6. Maintain existing code style and conventions
7. **Never commit private information** (phone numbers, emails, professional IDs) to public documentation files
8. Use placeholders in docs: `info@example.com`, `+XX XXX XXX XXX`, `XXXXX`
9. Respect the privacy-first philosophy (no tracking, no analytics)

---

**Last Updated**: December 16, 2025
**Version**: 3.0.0 - Multilingual Implementation Complete
**Maintained By**: Claude AI Assistant

## Recent Changes (v3.0.0)

**Multilingual Support - Separate Files Strategy** (December 16, 2025):
- ✅ Transitioned from JavaScript data-attribute toggling to URL-based separate files
- ✅ Created English version at `/en/index.html` with professional translations
- ✅ Updated Spanish version to remove all English content
- ✅ Implemented URL-based language switcher (no JavaScript required)
- ✅ Added hreflang tags to all 4 pages (2 homepages + 2 privacy policies)
- ✅ Updated sitemap.xml with bilingual structure
- ✅ Updated privacy policy color schemes to match current design system
- ✅ Moved English privacy policy to `/en/privacy-policy.html`
- ✅ All 142 bilingual elements converted to single-language content
- 📋 Created comprehensive TESTING-REPORT.md for manual QA
