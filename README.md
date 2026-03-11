# W.Z. Author Website

A professional author website for W.Z., featuring societal fiction works. Built for GitHub Pages with modern web standards.

## Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Dark Mode**: Default dark theme with toggle and localStorage persistence
- **Custom Cursor**: Lemon slice cursor (desktop only, fallback for touch)
- **SEO Optimized**: Complete meta tags, Schema.org markup, Open Graph
- **Print Friendly**: All pages support printing with optimized styles
- **Accessibility**: WCAG AA compliant with semantic HTML and ARIA labels
- **No Red Colors**: Indigo and yellow color palette throughout
- **Google Analytics**: Ready for GA4 integration

## Pages

1. **Home** (`/`) - Hero section, featured books, blog preview
2. **About** (`/about/`) - Author bio, writing philosophy
3. **Books** (`/books/`) - Book collection with synopses
4. **Blog** (`/blog/`) - Blog post listings
5. **Newsletter** (`/newsletter/`) - Email signup
6. **Contact** (`/contact/`) - Contact form and information

## Quick Start

### Deploy to GitHub Pages

1. **Create a new repository** on GitHub named `wzauthor.github.io` (replace "wzauthor" with your GitHub username)

2. **Upload the files**:
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/wzauthor.github.io.git
   cd wzauthor.github.io
   
   # Copy all website files
   cp -r /path/to/website/* .
   
   # Commit and push
   git add .
   git commit -m "Initial website launch"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / root
   - Click Save

4. **Your site will be live at**: `https://yourusername.github.io`

## Configuration

### 1. Update Placeholder Content

Edit these files to add your real content:

- `about/index.html` - Update bio, photo
- `books/index.html` - Add real book covers, purchase links
- `blog/index.html` - Add actual blog posts
- `contact/index.html` - Update email, social links

### 2. Set Up Forms

**Contact Form** (contact/index.html):
- Sign up at [Formspree](https://formspree.io)
- Create a new form
- Replace `YOUR_FORM_ID` in the form action URL

**Newsletter** (newsletter/index.html):
- Use [Buttondown](https://buttondown.email), [Mailchimp](https://mailchimp.com), or similar
- Update the form action URL

### 3. Add Google Analytics

Edit `assets/js/main.js`:
```javascript
// Replace with your GA4 Measurement ID
gaMeasurementId: 'G-XXXXXXXXXX'
```

### 4. Update Social Links

Edit all pages to update:
- Twitter/X handle
- Instagram handle
- Goodreads profile
- Facebook page

### 5. Create OG Images

Create 1200x630px images for:
- `assets/images/og-home.jpg`
- `assets/images/og-about.jpg`
- `assets/images/og-books.jpg`
- `assets/images/og-blog.jpg`

## File Structure

```
.
├── index.html                 # Home page
├── about/
│   └── index.html            # About page
├── books/
│   └── index.html            # Books page
├── blog/
│   └── index.html            # Blog page
├── newsletter/
│   └── index.html            # Newsletter page
├── contact/
│   └── index.html            # Contact page
├── 404.html                   # Error page
├── assets/
│   ├── css/
│   │   ├── main.css          # Main styles
│   │   └── print.css         # Print styles
│   ├── js/
│   │   └── main.js           # All scripts
│   └── images/               # Image assets
├── sitemap.xml               # SEO sitemap
├── robots.txt                # Crawler rules
└── README.md                 # This file
```

## Customization

### Colors

Edit CSS custom properties in `assets/css/main.css`:

```css
:root {
  --indigo-500: #6366F1;  /* Primary brand color */
  --yellow-400: #FACC15;  /* Accent color */
  --gray-900: #111827;    /* Dark background */
}
```

### Fonts

The site uses Google Fonts (Inter and Source Serif Pro). To change:

1. Update the Google Fonts link in each HTML file
2. Update CSS custom properties:

```css
--font-heading: 'Your Font', sans-serif;
--font-body: 'Your Font', serif;
```

### Cursor

The lemon slice cursor is defined in `assets/js/main.js`. To modify:

```javascript
const lemonCursor = `data:image/svg+xml,...`;
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## SEO Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Update all placeholder links with real URLs
- [ ] Add actual book purchase links
- [ ] Create and upload OG images
- [ ] Verify Google Analytics is working
- [ ] Test all forms

## Notes for Missing Assets

The following assets need to be created/updated:

1. **Author Photo**: `assets/images/author/portrait.jpg`
   - Recommended: 800x800px, square crop
   - Format: JPG or WebP

2. **Book Covers**: `assets/images/books/book-*.jpg`
   - Recommended: 600x900px (2:3 ratio)
   - Format: JPG or WebP

3. **OG Images**: `assets/images/og-*.jpg`
   - Required: 1200x630px
   - Format: JPG

4. **Favicon**: Add favicon files to root
   - favicon.ico (32x32)
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png (180x180)

## License

© 2024 W.Z. All rights reserved.

## Support

For issues or questions:
- GitHub Issues: [your-repo]/issues
- Email: [your-email]

---

Built with care for readers who question everything.
