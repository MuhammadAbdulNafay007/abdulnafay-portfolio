# Complete File Structure & Guide

## 📂 Project Directory Overview

```
portfolio/
├── app/
│   ├── layout.tsx                 # Root layout with metadata & theme
│   ├── page.tsx                   # Main portfolio page (home)
│   ├── globals.css                # Global styles & design tokens
│   ├── sitemap.ts                 # Dynamic sitemap for SEO
│   └── favicon.ico                # Browser tab icon
│
├── components/
│   ├── navbar.tsx                 # Sticky navigation bar
│   ├── footer.tsx                 # Footer section
│   ├── theme-toggle.tsx           # Dark/light mode toggle
│   ├── scroll-to-top.tsx          # Smooth scroll-to-top button
│   └── sections/
│       ├── hero.tsx               # Hero/landing section
│       ├── about.tsx              # About me section
│       ├── skills.tsx             # Skills showcase
│       ├── projects.tsx           # Projects portfolio
│       ├── experience.tsx         # Experience & education timeline
│       ├── testimonials.tsx       # Client testimonials
│       └── contact.tsx            # Contact form
│
├── data/
│   ├── portfolio.ts               # Personal info & links
│   ├── skills.ts                  # Technical skills by category
│   ├── projects.ts                # 6 example projects
│   ├── experience.ts              # Work experience & education
│   └── testimonials.ts            # Client testimonials
│
├── public/
│   ├── projects/
│   │   ├── ecommerce.jpg
│   │   ├── taskmanager.jpg
│   │   ├── blog.jpg
│   │   ├── dashboard.jpg
│   │   ├── realestate.jpg
│   │   └── chat.jpg
│   ├── testimonials/              # (Add testimonial images)
│   ├── resume.pdf                 # Your CV/resume
│   └── robots.txt                 # SEO robots configuration
│
├── lib/
│   └── utils.ts                   # Utility functions (cn())
│
├── hooks/
│   └── use-mobile.tsx             # Mobile detection hook
│
├── components/
│   └── ui/                        # Shadcn UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...other components
│
├── .next/                         # Build output (generated)
├── node_modules/                  # Dependencies (generated)
│
├── .env.example                   # Environment variables template
├── .gitignore                     # Git ignore rules
├── next.config.mjs                # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies
├── pnpm-lock.yaml                 # Dependency lock file
├── vercel.json                    # Vercel deployment config
│
├── README.md                      # Complete documentation
├── QUICKSTART.md                  # 5-minute setup guide
├── DEPLOYMENT.md                  # Deployment instructions
├── IMPLEMENTATION_SUMMARY.md      # This project summary
└── FILE_STRUCTURE.md              # This file

```

## 📄 Important Files to Edit

### 1. Personal Information
**File**: `data/portfolio.ts`
**Contains**: Name, title, email, phone, bio, social links
**When to Edit**: First thing after installation

### 2. Technical Skills
**File**: `data/skills.ts`
**Contains**: Skills organized by category (Frontend, Backend, Databases, Tools)
**When to Edit**: After portfolio info, before projects

### 3. Your Projects
**File**: `data/projects.ts`
**Contains**: 6 example projects (featured + other)
**When to Edit**: Before deployment, crucial for showcasing work

### 4. Work Experience
**File**: `data/experience.ts`
**Contains**: Job positions and education
**When to Edit**: Keep updated regularly

### 5. Testimonials
**File**: `data/testimonials.ts`
**Contains**: Client/colleague testimonials
**When to Edit**: As you receive feedback

### 6. Design Tokens
**File**: `app/globals.css`
**Contains**: Colors, spacing, typography variables
**When to Edit**: When customizing colors/theme

### 7. Project Images
**Directory**: `public/projects/`
**Format**: JPG, PNG, WebP (1200x600px recommended)
**When to Add**: With each new project

### 8. Your Resume
**File**: `public/resume.pdf`
**Format**: PDF (keep updated)
**When to Update**: After adding new experience

## 🎨 Component Files & Their Purpose

### Navigation & Layout
- **navbar.tsx** - Sticky header with mobile menu & theme toggle
- **footer.tsx** - Footer with social links & copyright

### UI Components
- **theme-toggle.tsx** - Dark/light mode switcher
- **scroll-to-top.tsx** - Floating button to scroll to top

### Page Sections
- **hero.tsx** - Landing section with name, role, CTA
- **about.tsx** - Bio with key highlights
- **skills.tsx** - Interactive skill showcase with tabs
- **projects.tsx** - Project portfolio with featured highlights
- **experience.tsx** - Timeline of work & education
- **testimonials.tsx** - Social proof section
- **contact.tsx** - Contact form with validation

## 📊 Data Structure Examples

### Portfolio Data
```typescript
export const portfolioData = {
  name: string,
  title: string,
  subtitle: string,
  email: string,
  phone: string,
  location: string,
  bio: string,
  resume: string,
  links: {
    github: string,
    linkedin: string,
    twitter: string,
    email: string,
  }
}
```

### Project Structure
```typescript
interface Project {
  id: string,
  title: string,
  description: string,
  longDescription: string,
  image: string,
  technologies: string[],
  github: string,
  live: string,
  featured: boolean,
  category: string,
}
```

### Experience Structure
```typescript
interface ExperienceItem {
  id: string,
  title: string,
  company: string,
  type: "work" | "education",
  startDate: string,
  endDate: string,
  description: string,
  skills?: string[],
  location?: string,
}
```

## 🔧 Configuration Files Explained

### next.config.mjs
- Next.js build settings
- Image optimization
- Security headers
- Compression settings

### tailwind.config.ts
- Tailwind CSS theme
- Color palette
- Spacing scale
- Font configuration

### tsconfig.json
- TypeScript compiler options
- Path aliases (@/ for imports)
- Strict mode enabled

### package.json
- Project dependencies
- Scripts (dev, build, start)
- Project metadata

## 🗂️ Folder Organization

### /app
**Contains**: Next.js app router pages and layouts
- `layout.tsx` - Root layout wrapper
- `page.tsx` - Home page (your portfolio)
- `globals.css` - Global styles
- `sitemap.ts` - Dynamic sitemap

### /components
**Contains**: Reusable React components
- Main navigation and footer
- All page sections
- UI utilities

### /data
**Contains**: Static data files (your info)
- Portfolio information
- Skills, projects, experience
- Testimonials

### /public
**Contains**: Static assets
- Images (projects, testimonials)
- Resume PDF
- robots.txt, favicon

### /lib
**Contains**: Utility functions
- Tailwind CSS className helper (cn)
- Type definitions

### /hooks
**Contains**: React custom hooks
- Mobile device detection

## 📝 File Sizes & Performance

| File | Purpose | Size |
|------|---------|------|
| page.tsx | Home page | ~1KB |
| globals.css | Styles | ~3KB |
| navbar.tsx | Navigation | ~3KB |
| projects.tsx | Portfolio | ~8KB |
| contact.tsx | Contact form | ~6KB |

**Total size**: ~50KB (uncompressed)

## 🚀 Build Output

After running `pnpm build`, the following are generated:

### .next/ Directory
- Compiled JavaScript bundles
- Optimized HTML
- CSS files
- Source maps (dev only)

### Key Output Files
- `.next/server/` - Server-side code
- `.next/static/` - Static assets
- `.next/cache/` - Build cache

## 🔐 Environment Variables

### Template File
`.env.example` - Copy and rename to `.env.local`

### Available Variables
```
NEXT_PUBLIC_GA_ID         # Google Analytics
EMAIL_SERVICE_API_KEY     # Contact form email
EMAIL_FROM_ADDRESS        # Email sender
```

### How to Use
```typescript
// In code:
const gaId = process.env.NEXT_PUBLIC_GA_ID

// Public variables must start with NEXT_PUBLIC_
```

## 📦 Dependencies

### Core Dependencies
- **next@16.2.0** - React framework
- **react@19** - UI library
- **typescript** - Type safety

### UI & Styling
- **tailwindcss** - Utility CSS
- **lucide-react** - Icons

### Animations
- **framer-motion** - Animation library

### Forms & Validation
- **react-hook-form** - Form management
- **zod** - Schema validation
- **@hookform/resolvers** - Form resolvers

### DevTools (for development)
- **@types/node** - Node.js types
- **@types/react** - React types
- **tailwind-merge** - Merge Tailwind classes

## 🔄 Git & Version Control

### .gitignore Configuration
- `/node_modules` - Dependencies
- `/.next` - Build output
- `/dist` - Production builds
- `.env.local` - Local variables
- `*.log` - Log files

### Recommended Commits
1. Initial setup
2. Add personal info
3. Add projects
4. Ready for deployment

## 📱 Responsive Breakpoints

Configured in Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎨 CSS Architecture

### Design Tokens (CSS Variables)
Location: `app/globals.css`

**Color Tokens**:
- `--primary` - Main brand color
- `--accent` - Secondary color
- `--background` - Page background
- `--foreground` - Text color
- `--muted` - Muted colors
- `--border` - Border color
- `--card` - Card background
- `--destructive` - Error color

**Size Tokens**:
- `--radius` - Border radius
- Spacing scale (via Tailwind)

### Light & Dark Mode
Both defined in `:root` and `.dark` selectors in globals.css

## 🧪 Testing Files

Located in project root (if added):
- `__tests__/` - Unit tests
- `e2e/` - End-to-end tests
- `.test.tsx` - Test files

## 📚 Documentation Files

- `README.md` - Full documentation
- `QUICKSTART.md` - Quick setup
- `DEPLOYMENT.md` - Deployment guide
- `IMPLEMENTATION_SUMMARY.md` - Project overview
- `FILE_STRUCTURE.md` - This file

## 🔍 Searching for Code

To find something:

| Need to find | Look in |
|-------------|---------|
| Colors | `/app/globals.css` |
| Your info | `/data/portfolio.ts` |
| Projects | `/data/projects.ts` |
| Skills | `/data/skills.ts` |
| Experience | `/data/experience.ts` |
| Homepage layout | `/app/page.tsx` |
| Navbar | `/components/navbar.tsx` |
| Animations | Look for `framer-motion` imports |
| Form validation | `/components/sections/contact.tsx` |

## 📋 File Editing Checklist

**Edit These First**:
- [ ] `/data/portfolio.ts` - Your info
- [ ] `/data/skills.ts` - Your skills
- [ ] `/data/projects.ts` - Your projects
- [ ] `/data/experience.ts` - Your experience
- [ ] `/public/resume.pdf` - Your CV

**Edit These Second**:
- [ ] `/app/globals.css` - Colors/theme
- [ ] `/public/projects/` - Add images

**Edit These Optional**:
- [ ] `/components/navbar.tsx` - Nav styling
- [ ] `/components/footer.tsx` - Footer content
- [ ] `/app/layout.tsx` - Metadata

## 🚀 Deployment Files

### Vercel Configuration
- `vercel.json` - Deployment settings
- Environment variables (in Vercel dashboard)

### Build Configuration
- `next.config.mjs` - Next.js settings
- `.next/` - Generated build files

## ✅ Quality Assurance Files

### Configuration Files
- `tsconfig.json` - Type checking
- `tailwind.config.ts` - CSS framework
- `.gitignore` - Version control

### Lock Files
- `pnpm-lock.yaml` - Dependency versions (DO NOT EDIT)

## 💡 Pro Tips for File Management

1. **Always edit data files, not components**
   - Keep components unchanged for updates

2. **Backup important files**
   - Portfolio data, resume, custom images

3. **Keep dependencies updated**
   - `pnpm update` periodically

4. **Use meaningful branch names**
   - `add-new-project`, `update-experience`

5. **Commit changes regularly**
   - Easier to revert if needed

## 🎓 Learning Path

1. Start with `/data/` files - understand the structure
2. Review `/app/page.tsx` - how components fit together
3. Check `/components/sections/` - how each section works
4. Explore `/app/globals.css` - design tokens & theming
5. Try `/components/` - interactive components

---

**Need help?** Check README.md or QUICKSTART.md!
