# Deployment Guide - Muhammad Abdul Nafay Portfolio

This guide provides step-by-step instructions for deploying your portfolio website to production.

## 🚀 Quick Start Deployment

### Option 1: Deploy to Vercel (Recommended - 2 minutes)

Vercel is the official hosting platform for Next.js applications.

#### Step 1: Create Vercel Account
1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket account
3. Verify your email

#### Step 2: Deploy Your Project
1. After signing in, click "Add New Project"
2. Select your GitHub repository
3. Click "Import"
4. Leave default settings (Vercel auto-detects Next.js)
5. Click "Deploy"

**That's it!** Your site is now live on a `.vercel.app` domain.

#### Step 3: Use Custom Domain (Optional)
1. In Vercel dashboard, go to Project Settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Option 2: Deploy Using Vercel CLI (3 minutes)

For experienced developers:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
cd /path/to/portfolio
vercel

# Follow the prompts
# Visit the provided URL to see your site
```

### Option 3: Deploy to Other Platforms

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
pnpm build
netlify deploy --prod --dir=.next
```

#### Railway
1. Visit [railway.app](https://railway.app)
2. Create new project
3. Select "GitHub" and authorize
4. Select your portfolio repository
5. Add environment variables if needed
6. Deploy

#### AWS Amplify
1. Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "Create App"
3. Select "GitHub" and authorize
4. Select your repository
5. Configure build settings (use Next.js template)
6. Deploy

## 🔧 Pre-Deployment Checklist

### Content Updates
- [ ] Update `data/portfolio.ts` with your correct information
- [ ] Replace all projects in `data/projects.ts` with your own
- [ ] Update experience and education in `data/experience.ts`
- [ ] Add real testimonials in `data/testimonials.ts`
- [ ] Update social media links
- [ ] Upload your resume/CV to `public/resume.pdf`

### Images
- [ ] Add project images to `/public/projects/`
- [ ] Update project image paths in data files
- [ ] Ensure all images are optimized
- [ ] Add testimonial images to `/public/testimonials/`

### Testing
- [ ] Test on mobile devices (use Chrome DevTools)
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test theme toggle (dark/light mode)
- [ ] Test all external links
- [ ] Check console for any errors

### SEO
- [ ] Verify metadata in `app/layout.tsx`
- [ ] Check Open Graph image is correct
- [ ] Verify sitemap.xml generates correctly
- [ ] Test robots.txt
- [ ] Add Google Analytics if desired

### Performance
- [ ] Run production build: `pnpm build`
- [ ] Test production build locally: `pnpm start`
- [ ] Check Lighthouse score (target: 90+)
- [ ] Test page load speed
- [ ] Verify images load quickly

### Security
- [ ] Ensure no sensitive data in code
- [ ] Check environment variables are not exposed
- [ ] Verify HTTPS is enabled
- [ ] Test CSP headers

## 📋 Environment Variables

### Required Variables
None - the portfolio works without environment variables out of the box.

### Optional Variables
Create `.env.local` in root directory:

```env
# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_measurement_id

# Email service (for contact form integration)
EMAIL_SERVICE_API_KEY=your_api_key
EMAIL_FROM_ADDRESS=your-email@example.com
```

## 🌐 Custom Domain Setup

### With Vercel (Easiest)
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for verification (usually instant)

### With External DNS Provider

#### Example: Namecheap
1. Log into Namecheap account
2. Go to Domain List
3. Click "Manage" for your domain
4. Navigate to Advanced DNS
5. Add these records:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel.app
   - TTL: 30 minutes

6. Add root domain:
   - Type: A
   - Name: @
   - Value: 76.76.19.89
   - TTL: 30 minutes

#### Example: Cloudflare
1. Add site to Cloudflare
2. Update nameservers at your domain registrar
3. Add DNS records:
   - CNAME: www → cname.vercel.app
   - A Record: @ → 76.76.19.89

## 📊 Post-Deployment Tasks

### 1. Verify Deployment
- [ ] Visit your site URL
- [ ] Check all pages load correctly
- [ ] Test responsive design on mobile
- [ ] Verify dark mode toggle works
- [ ] Test contact form

### 2. Setup Analytics (Optional)
```bash
# Install Google Analytics (optional)
pnpm add @react-google-analytics/core

# Add GA ID to environment variables
NEXT_PUBLIC_GA_ID=your_measurement_id
```

### 3. Add Google Search Console
1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for your domain
3. Verify ownership via DNS/HTML file
4. Submit sitemap.xml
5. Monitor search performance

### 4. Add Robots.txt and Sitemap
✅ Already included! No additional setup needed.

### 5. Monitor Performance
- Check Vercel Analytics dashboard
- Monitor Core Web Vitals
- Set up error tracking
- Monitor uptime

## 🔄 Continuous Deployment

### Automatic Deployments with Vercel
Every push to your main branch automatically deploys:

1. Code is pushed to GitHub
2. Vercel webhook is triggered
3. Build process starts
4. Tests run (if configured)
5. Site is deployed

### Preview Deployments
Every pull request automatically gets a preview URL:
- Preview URL: `https://[project]-[branch].vercel.app`
- Perfect for testing changes before merging

## 🐛 Troubleshooting Deployment

### Build Fails
**Problem**: Build fails with TypeScript errors
**Solution**: 
```bash
pnpm build
# Check error messages and fix issues locally first
```

**Problem**: Dependencies not installing
**Solution**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Site Shows Blank Page
**Problem**: Site loads but shows nothing
**Solution**:
1. Check browser console for errors
2. Verify environment variables are set
3. Check network tab for failed requests
4. Clear cache and hard refresh (Ctrl+Shift+R)

### Slow Performance
**Problem**: Site loads slowly
**Solution**:
1. Optimize images using tools like TinyPNG
2. Enable Next.js image optimization
3. Check Lighthouse report
4. Reduce JavaScript bundle size

### Domain Not Pointing Correctly
**Problem**: Domain shows Vercel default page
**Solution**:
1. Wait 24-48 hours for DNS propagation
2. Check DNS records are correctly configured
3. Verify domain in Vercel settings
4. Use DNS checker: [mxtoolbox.com](https://mxtoolbox.com)

### Contact Form Not Working
**Problem**: Form submission fails
**Solution**:
1. Check browser console for errors
2. Verify form validation rules
3. Test with sample data
4. Check email service configuration

## 🔒 Security Checklist

- [ ] Enable Vercel security headers (done in next.config.mjs)
- [ ] Set up CORS if needed
- [ ] Use HTTPS only (automatic with Vercel)
- [ ] Implement rate limiting for APIs
- [ ] Regularly update dependencies: `pnpm update`
- [ ] Monitor security advisories: `pnpm audit`
- [ ] Protect sensitive information (API keys, etc.)

## 📈 Performance Optimization Tips

### 1. Image Optimization
- Use WebP format
- Compress images before upload
- Use `next/image` component (already done)
- Lazy load images

### 2. Code Optimization
- Remove unused dependencies
- Code splitting (automatic with Next.js)
- Minimize CSS and JavaScript
- Remove console.logs in production

### 3. Caching Strategy
```javascript
// Already configured in next.config.mjs
// Static assets: 1 year cache
// HTML pages: 1 hour cache
```

### 4. CDN
- Vercel automatically uses CDN
- Content distributed globally
- Automatic compression
- Cache optimization

## 🎯 Final Checklist Before Going Live

- [ ] All personal information updated
- [ ] All projects added with images
- [ ] Experience and education complete
- [ ] Testimonials added
- [ ] Resume uploaded
- [ ] Social media links correct
- [ ] Contact form tested
- [ ] Mobile responsive tested
- [ ] Dark mode works
- [ ] All links work
- [ ] No console errors
- [ ] Lighthouse score 90+
- [ ] Custom domain configured
- [ ] Google Search Console setup
- [ ] Analytics configured (optional)
- [ ] Sitemap submitted to Google
- [ ] robots.txt in place

## 🚀 Deployment Summary

| Platform | Time | Ease | Cost |
|----------|------|------|------|
| Vercel | 2 min | Very Easy | Free |
| Netlify | 5 min | Easy | Free |
| Railway | 10 min | Easy | Free/Paid |
| AWS Amplify | 15 min | Medium | Free/Paid |

## 📞 Getting Help

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Deployment Issues**: Check Vercel logs in dashboard
- **Build Issues**: Run `pnpm build` locally to debug

---

**Your portfolio is ready to deploy! 🎉**

Choose your deployment platform and follow the instructions above. Vercel is recommended as it's optimized for Next.js and offers the smoothest experience.
