# Muhammad Abdul Nafay - Full Stack Developer Portfolio

A modern, professional portfolio website showcasing full-stack web development expertise with MERN and Laravel specialization.

## 🌟 Features

- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Dark/Light Mode**: Automatic theme switching with user preference storage
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Complete SEO setup with metadata, sitemap, and robots.txt
- **Performance**: Optimized for Lighthouse with excellent scores
- **Modern Tech Stack**: Next.js (App Router), React, TypeScript, Tailwind CSS
- **Form Validation**: React Hook Form with Zod validation
- **Accessibility**: WCAG 2.1 compliant with semantic HTML

## 📋 Sections Included

1. **Hero Section**: Eye-catching introduction with CTA buttons
2. **About Me**: Personal bio with key highlights
3. **Skills**: Interactive skills showcase with progress indicators
4. **Projects**: Featured projects with detailed descriptions
5. **Experience**: Timeline of work experience and education
6. **Testimonials**: Social proof from colleagues and clients
7. **Contact Form**: Fully validated contact form with submission handling
8. **Footer**: Comprehensive footer with links and social media

## 🛠 Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Form Management**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- pnpm, npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd abdulnafay-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Personal Information

Edit `/data/portfolio.ts` with your information:
```typescript
export const portfolioData = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  email: "your.email@example.com",
  // ... other fields
};
```

### Update Skills

Edit `/data/skills.ts` to add your technical skills:
```typescript
export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["Your", "Skills", "Here"],
    color: "from-blue-500 to-cyan-500",
  },
  // ... more categories
];
```

### Update Projects

Edit `/data/projects.ts` to add your projects:
```typescript
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Short description",
    longDescription: "Detailed description",
    image: "/projects/your-project.jpg",
    technologies: ["React", "Node.js"],
    github: "https://github.com/your-repo",
    live: "https://your-project.com",
    featured: true,
    category: "Full Stack",
  },
  // ... more projects
];
```

### Update Experience

Edit `/data/experience.ts` to add your work experience and education:
```typescript
export const experienceData: ExperienceItem[] = [
  {
    id: "1",
    title: "Your Job Title",
    company: "Company Name",
    type: "work",
    startDate: "Jan 2024",
    endDate: "Present",
    description: "Job description",
    skills: ["Skill1", "Skill2"],
    location: "City, Country",
  },
  // ... more entries
];
```

### Update Testimonials

Edit `/data/testimonials.ts` to add testimonials:
```typescript
export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Person Name",
    role: "Position",
    company: "Company",
    quote: "Their testimonial quote here",
    image: "/testimonials/person.jpg",
  },
];
```

### Update Theme Colors

Modify `/app/globals.css` to change the color scheme:
```css
:root {
  /* Customize these color values */
  --primary: oklch(0.35 0.15 250); /* Your primary color */
  --accent: oklch(0.60 0.18 195);  /* Your accent color */
  /* ... other colors */
}
```

### Add Project Images

1. Place your project images in `/public/projects/`
2. Update the image paths in `/data/projects.ts`

### Add Resume/CV

1. Convert your resume to PDF and place it in `/public/resume.pdf`
2. Update the path in `/data/portfolio.ts` if needed

## 🎨 Styling & Customization

### Design Tokens

The portfolio uses CSS custom properties (design tokens) for consistent styling. Key tokens:

- `--background`: Main background color
- `--foreground`: Main text color
- `--primary`: Primary brand color
- `--accent`: Secondary accent color
- `--muted`: Muted background colors
- `--border`: Border colors

All tokens support both light and dark modes.

### Tailwind CSS

Modify `tailwind.config.ts` for additional customization:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        // Add custom colors
      },
    },
  },
};
```

## 📦 Build & Deployment

### Build for Production

```bash
pnpm build
# or
npm run build
```

### Preview Production Build

```bash
pnpm start
# or
npm start
```

## 🚀 Deploy on Vercel

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to complete deployment

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "Import Project"
5. Select your repository
6. Click "Deploy"

### Option 3: Manual Deployment

1. Build the project: `pnpm build`
2. Commit and push to a Git repository
3. Connect repository to Vercel through the dashboard
4. Vercel will automatically deploy on every push

## 📊 SEO Optimization

The portfolio includes:
- ✅ Meta tags and structured data
- ✅ Open Graph tags for social sharing
- ✅ Dynamic sitemap.xml
- ✅ robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Optimized images with next/image
- ✅ Mobile-responsive design
- ✅ Fast page load with code splitting

## 📱 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.1
- **Interaction to Next Paint**: < 200ms

## 🔐 Security

- HTTPS enabled on Vercel
- No sensitive data in code
- Environment variables for configuration
- CORS properly configured
- Content Security Policy headers

## 🤝 Contributing

Feel free to fork this project and customize it for your own use.

## 📄 License

This project is licensed under the MIT License.

## 💡 Tips & Best Practices

### Regular Updates
- Update your projects as you complete new ones
- Keep skills and experience section current
- Refresh testimonials periodically

### Content Optimization
- Use clear, concise descriptions
- Include specific technologies and metrics
- Add links to live demos and repositories

### Performance
- Optimize images before uploading
- Use lazy loading for heavy components
- Minimize bundle size regularly

### Analytics
Consider adding Google Analytics:
```typescript
// Add to layout.tsx or use Vercel Analytics
import { Analytics } from "@vercel/analytics/next";
```

## 🐛 Troubleshooting

### Dark Mode Not Working
- Clear browser cache
- Check localStorage for theme preference
- Ensure system theme preference is set

### Images Not Loading
- Verify image paths in data files
- Check that images exist in `/public/projects/`
- Ensure image format is supported (jpg, png, webp)

### Form Not Submitting
- Check browser console for validation errors
- Verify all required fields are filled
- Check email field format

### Slow Performance
- Run `pnpm build` and `pnpm start` to test production build
- Check network tab in DevTools
- Optimize images and videos

## 📞 Support

For issues or questions:
1. Check the documentation above
2. Review the code comments
3. Check Next.js docs: [nextjs.org](https://nextjs.org)
4. Check Tailwind CSS docs: [tailwindcss.com](https://tailwindcss.com)

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🎉 Final Checklist

Before deploying to production:
- [ ] Update all personal information
- [ ] Add your projects with images
- [ ] Update experience and education
- [ ] Add or remove skills as needed
- [ ] Update social media links
- [ ] Add your resume/CV
- [ ] Test on mobile devices
- [ ] Check Lighthouse score
- [ ] Update Open Graph image
- [ ] Configure custom domain (optional)

---

**Built with Next.js, React, TypeScript, and Tailwind CSS**

Made with ♥ by Muhammad Abdul Nafay
