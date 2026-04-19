# Quick Start Guide - Muhammad Abdul Nafay Portfolio

Get your personalized portfolio up and running in 5 minutes! 🚀

## 5-Minute Setup

### Step 1: Update Your Information (2 min)

Edit `/data/portfolio.ts`:
```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Specialization",
  email: "your.email@gmail.com",
  phone: "+92 300 XXXX XXX",
  location: "Your City, Country",
  bio: "Your professional bio here...",
  resume: "/resume.pdf", // Update your CV
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    email: "mailto:your.email@gmail.com",
  },
};
```

### Step 2: Update Your Skills (1 min)

Edit `/data/skills.ts` - replace skills in each category:
```typescript
{
  category: "Frontend",
  skills: ["Your", "Skills", "Here"],
  color: "from-blue-500 to-cyan-500",
}
```

### Step 3: Add Your Projects (1 min)

Edit `/data/projects.ts` - add your 3-6 best projects:
```typescript
{
  id: "1",
  title: "Your Project Title",
  description: "Short description",
  longDescription: "Detailed description of the project...",
  image: "/projects/your-project.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/yourrepo",
  live: "https://your-project.com",
  featured: true,
  category: "Full Stack",
}
```

### Step 4: Update Experience (1 min)

Edit `/data/experience.ts`:
```typescript
{
  id: "1",
  title: "Your Job Title",
  company: "Company Name",
  type: "work",
  startDate: "Jan 2024",
  endDate: "Present",
  location: "City, Country",
  description: "What you did at this job...",
  skills: ["React", "Node.js"],
}
```

## 🖼️ Adding Project Images

1. Create your project preview images (1200x600px recommended)
2. Save them to `/public/projects/` folder
3. Update image paths in `data/projects.ts`:
   ```typescript
   image: "/projects/my-project.jpg"
   ```

**Quick Tip**: Use [Figma](https://figma.com) or [Canva](https://canva.com) to create professional mockups

## 📄 Adding Your Resume

1. Convert your resume to PDF
2. Save as `/public/resume.pdf`
3. Update path in `data/portfolio.ts` if different

## 🌈 Customizing Colors

Want to change the colors? Edit `/app/globals.css`:

```css
:root {
  /* Change primary color (blue) */
  --primary: oklch(0.35 0.15 250);
  
  /* Change accent color (cyan) */
  --accent: oklch(0.60 0.18 195);
  
  /* ... other colors ... */
}
```

**Color Tool**: Use [oklch.dev](https://oklch.dev) to pick colors

## 🧪 Run Locally

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Visit http://localhost:3000
```

## ✅ Before Deployment Checklist

- [ ] Updated your name and contact info
- [ ] Added all your projects with images
- [ ] Updated work experience
- [ ] Added testimonials (optional but nice)
- [ ] Updated social links
- [ ] Added your resume
- [ ] Tested on mobile phone
- [ ] Tested dark mode toggle
- [ ] Tested contact form

## 🚀 Deploy to Vercel (Free!)

### Option 1: Automatic (Recommended)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" → Select your repo
4. Click "Deploy"

**Done!** Site is live in seconds

### Option 2: CLI
```bash
npm i -g vercel
vercel
```

## 🎨 Customization Ideas

### Change Font
Edit `app/layout.tsx`:
```typescript
import { Poppins, Inter } from 'next/font/google'

const font = Poppins({ subsets: ['latin'] })
```

### Add More Sections
1. Create new file in `/components/sections/`
2. Export a component
3. Import in `/app/page.tsx`
4. Add to page

### Add Blog Section
1. Create `/app/blog/` folder
2. Add blog posts as `.mdx` files
3. Link from navbar

## 🆘 Common Issues

### Images Not Showing
- Check image paths in data files
- Ensure images are in `/public/projects/`
- File names are case-sensitive

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build
```

### Dark Mode Not Working
- Clear browser cache
- Check localStorage in DevTools
- Ensure system theme preference is set

### Form Not Submitting
- Check browser console
- Verify email and name are filled
- Check validation rules in `Contact` component

## 📚 Useful Resources

- **Color Picker**: [oklch.dev](https://oklch.dev)
- **Icons**: Already included (Lucide React)
- **Animations**: Framer Motion (pre-configured)
- **Design Inspiration**: [dribbble.com](https://dribbble.com)
- **Project Ideas**: [buildspace.so](https://buildspace.so)

## 🎯 Next Steps

1. ✅ Update all information
2. ✅ Deploy to Vercel
3. ✅ Add custom domain (optional)
4. ✅ Set up Google Analytics (optional)
5. ✅ Share with recruiters!

## 💡 Pro Tips

- **Update Regularly**: Add new projects as you build them
- **Keep It Fresh**: Update experience and skills quarterly
- **Show Your Work**: Add more projects than you think necessary
- **Mobile First**: Always test on your phone
- **Lighthouse**: Aim for 90+ score
- **SEO**: Your site is already optimized!

## 🆘 Need Help?

- Check `README.md` for full documentation
- See `DEPLOYMENT.md` for detailed deployment steps
- Visit [nextjs.org/docs](https://nextjs.org/docs)
- Check source code comments

---

**You're all set!** Your portfolio is ready to impress recruiters. 🎉

**Total time: ~5 minutes**

**Don't forget to test everything before sharing!**
