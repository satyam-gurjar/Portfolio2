# 🎨 Portfolio Customization Guide

Welcome! This guide will help you customize your portfolio step-by-step.

## 📋 Quick Start Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will open at `http://localhost:3000`

---

## 🔧 Customization Steps

### Step 1: Update Personal Information

Open `src/config/portfolio.js` and update:

#### Personal Details
- `personal.name` - Your full name
- `personal.logo` - Your initials or brand name
- Social media links (GitHub, LinkedIn, Twitter, Email)

#### Hero Section
- `hero.greeting` - Your greeting text
- `hero.name` - Your name (can be different styling)
- `hero.role` - Your job title/role
- `hero.bio` - Short introduction (2-3 lines)
- `hero.resumeUrl` - Link to your resume

### Step 2: Update About Section

Edit `portfolioData.about`:
- `description` - Your professional summary
- `yearsOfExperience` - How long you've been coding
- `additionalInfo` - More about your journey

### Step 3: Update Skills

Edit `portfolioData.skills`:
- Each category has: `name`, `icon`, `color`, `skills`
- For each skill: `name` and `level` (0-100)
- Update `additionalSkills` array with other technologies

**Skill Level Guidelines:**
- 90-100: Expert/Master level
- 80-89: Advanced/Proficient
- 70-79: Intermediate
- 60-69: Basic/Learning

### Step 4: Add Your Projects

Edit `portfolioData.projects`:

For each project, provide:
- `title` - Project name
- `description` - Brief description (1-2 sentences)
- `image` - Screenshot URL (see image guide below)
- `tech` - Array of technologies used
- `github` - GitHub repository URL
- `demo` - Live demo URL

#### Project Images:
1. Create folder: `public/projects/`
2. Add your screenshots (recommended: 1200x800px)
3. Update image path: `/projects/your-image.jpg`

Example:
```javascript
image: '/projects/ecommerce-screenshot.jpg'
```

### Step 5: Update Experience & Education

Edit `portfolioData.experience`:

#### Work Experience
- `position` - Job title
- `company` - Company name
- `date` - Employment period
- `description` - Job responsibilities

#### Education
- `degree` - Degree or course name
- `institution` - School/university/bootcamp
- `date` - Duration
- `description` - Key learnings

### Step 6: Update Contact Information

Edit `portfolioData.contact`:
- `email` - Your email address
- `phone` - Your phone number
- `location` - City, Country
- Update social links

---

## 🎨 Styling Customization

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Change these hex values
    500: '#0ea5e9', // Main brand color
    600: '#0284c7', // Darker shade
    // ... etc
  }
}
```

### Change Fonts

1. Go to [Google Fonts](https://fonts.google.com)
2. Choose your fonts
3. Update in `index.html` (link tag)
4. Update in `tailwind.config.js` (fontFamily)

---

## 📸 Adding Real Images

### Project Screenshots
1. Take high-quality screenshots (1200x800px recommended)
2. Save in `public/projects/`
3. Update image paths in `portfolio.js`

### Profile Photo (Optional)
1. Add your photo to `public/`
2. Update in About section or Hero

---

## 🚀 Building for Production

### Build Command
```bash
npm run build
```

This creates optimized files in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 📤 Deployment Options

### Option 1: Netlify
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Auto-detects Vite configuration
4. Deploy!

### Option 3: GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

---

## 🔍 SEO Optimization

### Update Meta Tags

Edit `index.html`:
- `<title>` - Your name and role
- `<meta name="description">` - Site description
- `<meta name="keywords">` - Relevant keywords

### Add Favicon
1. Create favicon (16x16, 32x32, 180x180)
2. Add to `public/`
3. Update link in `index.html`

---

## 🐛 Troubleshooting

### Issue: 3D animations not working
- Check browser compatibility (needs WebGL)
- Try different browser

### Issue: Images not loading
- Check file paths (should start with `/`)
- Ensure images are in `public/` folder
- Check file extensions match exactly

### Issue: Animations too slow/fast
- Edit duration values in `src/utils/animations.js`

---

## 💡 Tips for Best Results

1. **Professional Photos**: Use high-quality project screenshots
2. **Honest Skills**: Don't inflate skill levels
3. **Proofread**: Check all text for typos
4. **Test Mobile**: View on different screen sizes
5. **Performance**: Optimize images (use WebP format)
6. **Update Regularly**: Keep projects and skills current

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js Journey](https://threejs-journey.com)

---

## 🆘 Need Help?

- Check the code comments in each file
- Review component documentation
- Open an issue on GitHub
- Stack Overflow for specific questions

---

## ⭐ Show Your Portfolio

Once deployed, share it with:
- LinkedIn
- Twitter with #webdevelopment #portfolio
- Reddit dev communities
- Dev.to

---

**Good luck with your portfolio! 🚀**

Remember: Your portfolio is a living document. Update it regularly as you learn new skills and complete new projects.
