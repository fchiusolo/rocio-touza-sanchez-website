# Website Improvement Roadmap

> **Note**: This roadmap is forward-looking and focuses on next steps only. For project history and completed items, see git commit history.

## Recently Completed

### Build System & Architecture (December 18, 2025)

| Task | Completion |
|------|-----------|
| ✅ Migrate to 11ty (Eleventy) static site generator | **COMPLETE** |
| ✅ Implement JSON-based content management (es.json, en.json) | **COMPLETE** |
| ✅ Create reusable Nunjucks components | **COMPLETE** |
| ✅ Set up GitHub Actions CI/CD pipeline for automated builds/deployment | **COMPLETE** |
| ✅ Implement bilingual template generation from single source | **COMPLETE** |
| ✅ Update documentation to reflect new build process | **COMPLETE** |

**Impact**: Content updates now simplified - edit JSON files, run `npm run build`, push to GitHub. Automated deployment eliminates manual build steps.

---

## SEO & Discoverability

### Phase 1: On-Page SEO (Code Changes)

| # | Task | Priority | Complexity | Status | GitHub Issue |
|---|------|----------|------------|--------|--------------|
| 1 | Optimize meta tags with Barcelona keywords | High | Easy | Pending | [#17](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/17) |
| 2 | Add "Barcelona" to H1 and visible content | High | Easy | Pending | [#18](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/18) |
| 3 | Enhance structured data with LocalBusiness schema | High | Medium | Pending | [#19](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/19) |
| 4 | Add canonical and hreflang tags | High | Easy | ✅ **COMPLETE** | [#36](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/36) |
| 5 | Update sitemap.xml lastmod dates | High | Easy | ✅ **COMPLETE** | [#37](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/37) |
| 6 | Add geographic keywords throughout content | Medium | Medium | [#22](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/22) |
| 7 | Expand service descriptions with more detail | Medium | Medium | [#23](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/23) |
| 8 | Add alt text to all images | Medium | Easy | [#24](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/24) |
| 9 | Add FAQ schema markup | Low | Medium | [#25](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/25) |

### Phase 2: Google Optimization (External Tasks)

| # | Task | Priority | Owner | GitHub Issue |
|---|------|----------|-------|--------------|
| 10 | Submit to Google Search Console | High | Rocío/Donald | [#26](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/26) |
| 11 | Optimize Google Business Profile | High | Rocío | [#27](https://github.com/fchiusolo/rocio-touza-sanchez-website/issues/27) |

## SEO Strategy Notes

### Target Keywords (Barcelona-focused)
- **Primary**: "psicóloga Barcelona", "psicólogo Barcelona"
- **Secondary**: "terapia online Barcelona", "ansiedad Barcelona", "terapia LGTBIQ+ Barcelona"
- **Long-tail**: "psicóloga LGTBIQ+ Barcelona", "terapia inclusiva Barcelona"

### Geographic Information
- **Service Area**: Barcelona, Cataluña, España (online therapy available nationwide)

### Expected SEO Timeline
- **Week 1-2**: Google indexes the site
- **Month 1**: Appears in searches for "Rocío Touza Sanchez"
- **Month 2-3**: Ranks for low-competition keywords
- **Month 6+**: Competes for "psicólogo Barcelona" (high competition)

## Explicitly NOT Doing

- ❌ Google Analytics (conflicts with no-cookie policy)
- ❌ Blog/Articles section (out of scope for MVP)
- ❌ Social media presence (not priority)
- ❌ Active backlinks strategy (organic growth only)

---

## Completed Milestones

### Multilingual Support (December 16, 2025)
- ✅ Implemented separate-file multilingual architecture
- ✅ Created English version at `/en/index.html`
- ✅ Added hreflang tags to all pages (satisfies Task #4)
- ✅ Updated sitemap.xml with bilingual structure (satisfies Task #5)
- ✅ Implemented URL-based language switcher
- ✅ Professional bilingual content translations

### Build System & Architecture (December 18, 2025)
- ✅ Migrated from static HTML to 11ty (Eleventy)
- ✅ Implemented JSON-based content management
- ✅ Created reusable Nunjucks component architecture
- ✅ Configured GitHub Actions for automated CI/CD
- ✅ Implemented npm scripts: `npm run serve`, `npm run build`, `npm run clean`
- ✅ Updated all documentation files
- ✅ Tested bilingual generation and deployment

*Last updated: December 18, 2025*
