# Quick Start Guide - V Films Web Application

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure API Endpoint
Open `src/config/api.config.ts` and update the API URL:
```typescript
export const API_BASE_URL = 'https://your-actual-api.com';
```

### Step 3: Run Development Server
```bash
npm run dev
```

Visit: `http://localhost:5173`

## 📝 API Integration Checklist

- [ ] Update `API_BASE_URL` in `src/config/api.config.ts`
- [ ] Test API endpoint with Postman/curl
- [ ] Verify API accepts JSON with these fields:
  - `name` (string)
  - `email` (string)
  - `phone` (string)
  - `message` (string)
- [ ] Confirm API returns JSON response
- [ ] Test form submission on the website

## 🎯 What's Included

✅ **Hero Section** - Company branding and introduction
✅ **About Team** - Team showcase with visual storytelling
✅ **Contact Form** - Fully validated form with API integration
✅ **Footer** - Links, social media, and contact info
✅ **Responsive Design** - Mobile, tablet, and desktop optimized

## 📱 Test Responsiveness

1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test these breakpoints:
   - Mobile: 375px, 480px
   - Tablet: 768px, 968px
   - Desktop: 1200px, 1920px

## 🔧 Common Tasks

### Update Contact Information
Edit `src/components/ContactForm.tsx`:
- Lines 187-202 for contact details display

### Change Colors
Edit any component's CSS file:
- Primary: `#F5E6D3`
- Accent: `#D84315`
- Text: `#2C3E50`

### Add New Section
1. Create component in `src/components/`
2. Import in `src/App.tsx`
3. Add between existing sections

## 🐛 Troubleshooting

**Form not submitting?**
- Check API endpoint in `src/config/api.config.ts`
- Check browser console for errors
- Verify API is accepting CORS requests

**Styles not loading?**
- Clear browser cache
- Restart dev server
- Check CSS import in component

**Build fails?**
- Run `npm install` again
- Delete `node_modules` and reinstall
- Check Node.js version (should be 16+)

## 📦 Production Build

```bash
npm run build
```

Files will be in `dist/` folder.

## 🌐 Deploy

**Vercel (Recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📞 Need Help?

- Check `PROJECT_README.md` for detailed documentation
- Review component files for inline comments
- Test API endpoint separately before integration

---

**Ready to go!** 🎉 Your application is fully responsive and production-ready.
