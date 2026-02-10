# 🚀 Quick Setup Guide

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Three Fiber & Drei
- React Icons

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will open at: `http://localhost:3000`

### 3. Customize Your Content

Open `src/config/portfolio.js` and update:
- Personal information
- Skills and technologies
- Projects
- Experience
- Contact details

**See CUSTOMIZATION.md for detailed guide**

---

## 📁 Project Structure

```
Portfolio/
├── public/                 # Static assets
│   └── vite.svg           # Favicon
├── src/
│   ├── components/
│   │   ├── 3d/            # Three.js 3D components
│   │   │   ├── FloatingShape.jsx
│   │   │   ├── FloatingIcons.jsx
│   │   │   └── Scene3D.jsx
│   │   ├── common/        # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── ScrollDown.jsx
│   │   │   ├── ScrollIndicator.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── layout/        # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/      # Page sections
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Experience.jsx
│   │       └── Contact.jsx
│   ├── config/
│   │   └── portfolio.js   # ⭐ EDIT THIS FILE
│   ├── utils/
│   │   ├── animations.js  # Framer Motion variants
│   │   └── helpers.js     # Utility functions
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
├── README.md
└── CUSTOMIZATION.md       # Detailed customization guide
```

---

## 🎨 Key Features

✅ **3D Animations** - Interactive Three.js elements  
✅ **Smooth Transitions** - Professional Framer Motion animations  
✅ **Responsive Design** - Mobile-first, works on all devices  
✅ **Dark Theme** - Modern dark theme with glassmorphism  
✅ **Performance Optimized** - Lazy loading and code splitting  
✅ **Easy to Customize** - All content in one config file  
✅ **Production Ready** - Optimized build configuration  
✅ **SEO Friendly** - Proper meta tags and structure  

---

## 🛠️ Available Scripts

### Development
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

---

## 🎯 Next Steps

1. ✏️ Update `src/config/portfolio.js` with your information
2. 📸 Add your project screenshots to `public/projects/`
3. 📄 Add your resume PDF to `public/resume.pdf`
4. 🎨 (Optional) Customize colors in `tailwind.config.js`
5. 🚀 Build and deploy!

---

## 📤 Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect repo to Netlify
3. Build: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Auto-deploys on push

### GitHub Pages
```bash
npm run build
# Upload dist folder to gh-pages branch
```

---

## 💡 Pro Tips

- **Images**: Use WebP format for better performance
- **Resume**: Update regularly and link correctly
- **Projects**: Show your best 4-6 projects
- **Skills**: Be honest with skill levels
- **Mobile**: Always test on mobile devices
- **Loading**: Optimize images under 500KB each

---

## 🆘 Support

- 📖 Check code comments in files
- 📚 Read CUSTOMIZATION.md for details
- 🔍 Search Stack Overflow for React/Vite issues
- 💬 Check React/Vite documentation

---

## 📝 License

MIT License - Free to use for your portfolio!

---

**Ready to impress recruiters? Let's go! 🚀**
