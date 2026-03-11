# Missing Assets - Notes for W.Z. Author Website

This document lists all placeholder content and assets that need to be created or updated before the website is fully complete.

## Images Needed

### Author Photos
| File | Location | Specifications | Status |
|------|----------|----------------|--------|
| portrait.jpg | `assets/images/author/portrait.jpg` | 800x800px, square, JPG/WebP | PLACEHOLDER |
| portrait-alt.jpg | `assets/images/author/portrait-alt.jpg` | 800x800px, alternative pose | OPTIONAL |

**Current Implementation**: Using CSS gradient placeholder with initials "W.Z."

### Book Covers
| File | Book | Specifications | Status |
|------|------|----------------|--------|
| book-compliance-office.jpg | The Compliance Office | 600x900px (2:3 ratio), JPG | PLACEHOLDER |
| book-quiet-zones.jpg | Quiet Zones | 600x900px (2:3 ratio), JPG | PLACEHOLDER |
| book-inheritance.jpg | The Inheritance | 600x900px (2:3 ratio), JPG | PLACEHOLDER |

**Current Implementation**: Using colored div placeholders with book titles

### Open Graph Images (Social Sharing)
| File | Page | Specifications | Status |
|------|------|----------------|--------|
| og-home.jpg | Home | 1200x630px, JPG | PLACEHOLDER |
| og-about.jpg | About | 1200x630px, JPG | PLACEHOLDER |
| og-books.jpg | Books | 1200x630px, JPG | PLACEHOLDER |
| og-blog.jpg | Blog | 1200x630px, JPG | PLACEHOLDER |
| og-newsletter.jpg | Newsletter | 1200x630px, JPG | PLACEHOLDER |
| og-contact.jpg | Contact | 1200x630px, JPG | PLACEHOLDER |

**Current Implementation**: Referenced in meta tags but files don't exist

### Favicon Package
| File | Size | Purpose | Status |
|------|------|---------|--------|
| favicon.ico | 16x16, 32x32 | Browser tab icon | MISSING |
| favicon-16x16.png | 16x16 | Legacy browsers | MISSING |
| favicon-32x32.png | 32x32 | Standard favicon | MISSING |
| apple-touch-icon.png | 180x180 | iOS home screen | MISSING |
| android-chrome-192x192.png | 192x192 | Android homescreen | MISSING |
| android-chrome-512x512.png | 512x512 | Android splash | MISSING |
| site.webmanifest | - | PWA manifest | MISSING |

**Current Implementation**: None - add to `<head>` when created

## Content to Update

### Author Bio
**Location**: `about/index.html` (lines 95-120)

**Current**: Placeholder bio about W.Z. writing societal fiction

**Needs**: 
- Actual author biography
- Real background information
- Actual influences and inspiration
- Real awards/recognition (if any)

### Book Details
**Location**: `books/index.html` (lines 125-325)

**Current**: Placeholder synopses for:
- The Compliance Office
- Quiet Zones
- The Inheritance

**Needs**:
- Actual book descriptions
- Real publication dates
- Actual ISBN numbers
- Real purchase links (Amazon, B&N, etc.)
- Actual reviews/quotes

### Blog Posts
**Location**: `blog/index.html` (lines 110-314)

**Current**: 6 placeholder blog post previews:
- On Writing Unlikable Characters
- The Problem with Hope
- Research as Distraction
- On Reading Your Reviews
- The First Draft is Allowed to be Bad
- Finding the Right Ending

**Needs**:
- Actual blog post content
- Real publication dates
- Actual categories/tags
- Individual blog post pages (optional)

### Contact Information
**Location**: `contact/index.html` (lines 95-140)

**Current**: Placeholder email and social links

**Needs**:
- Real contact email address
- Actual social media profile URLs
- Real response time expectations

## External Services to Configure

### 1. Formspree (Contact Form)
**Location**: `contact/index.html` line 185

**Current**:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Action**:
1. Sign up at https://formspree.io
2. Create a new form
3. Replace `YOUR_FORM_ID` with actual form ID

### 2. Newsletter Provider
**Location**: `newsletter/index.html` line 145, `index.html` footer

**Current**:
```html
<form action="https://buttondown.email/api/emails/embed-subscribe/YOUR_USERNAME" method="post">
```

**Options**:
- [Buttondown](https://buttondown.email) (recommended for authors)
- [Mailchimp](https://mailchimp.com)
- [ConvertKit](https://convertkit.com)
- [Substack](https://substack.com)

**Action**:
1. Choose provider
2. Set up account
3. Update form action URL
4. Configure welcome email

### 3. Google Analytics 4
**Location**: `assets/js/main.js` lines 15-20

**Current**:
```javascript
const config = {
  gaMeasurementId: 'G-XXXXXXXXXX', // Replace with your GA4 ID
};
```

**Action**:
1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (starts with G-)
3. Replace in main.js

### 4. Social Media Links
**Locations**: All pages, footer section

**Current**: Placeholder links to `#`

**Platforms to update**:
- Twitter/X: `https://twitter.com/wzauthor`
- Instagram: `https://instagram.com/wzauthor`
- Goodreads: `https://goodreads.com/author/show/wzauthor`
- Facebook: `https://facebook.com/wzauthor`
- GitHub: `https://github.com/wzauthor`

**Action**: Create accounts and update all href attributes

## Domain Configuration (Optional)

### Custom Domain
**Current**: GitHub Pages subdomain (`username.github.io`)

**To use custom domain**:
1. Purchase domain (e.g., wzauthor.com)
2. Add CNAME file to repository root with domain name
3. Configure DNS with your registrar:
   - A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Or CNAME: username.github.io
4. Enable HTTPS in GitHub Pages settings

## SEO Tasks

### Search Console Setup
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verify domain ownership
- [ ] Request indexing for main pages

### Content Optimization
- [ ] Write unique meta descriptions for each page
- [ ] Add alt text to all images when uploaded
- [ ] Create and upload OG images
- [ ] Verify Schema.org markup with [Rich Results Test](https://search.google.com/test/rich-results)

## Design Customization (Optional)

### Color Scheme
The current palette uses:
- Primary: Indigo (#6366F1)
- Accent: Yellow (#FACC15)
- Dark background: #111827

To customize, edit CSS custom properties in `assets/css/main.css`

### Typography
Current fonts:
- Headings: Inter
- Body: Source Serif Pro

To change, update Google Fonts link and CSS variables.

## Pre-Launch Checklist

- [ ] All placeholder images replaced with actual assets
- [ ] Author bio updated with real information
- [ ] Book details include real synopses and purchase links
- [ ] Contact form connected to Formspree
- [ ] Newsletter signup connected to provider
- [ ] Google Analytics ID added
- [ ] All social media links updated
- [ ] Favicon package created and linked
- [ ] OG images created and uploaded
- [ ] All placeholder `href="#"` links updated
- [ ] Site tested on mobile devices
- [ ] Site tested in multiple browsers
- [ ] Forms tested with actual submissions
- [ ] Sitemap submitted to search engines

## Notes

- The website is fully functional with placeholders
- All core functionality works (navigation, dark mode, cursor, forms)
- SEO structure is complete and ready for content
- Print styles are configured
- Accessibility features are implemented

The website can be deployed as-is and updated incrementally as assets become available.
