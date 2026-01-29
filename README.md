# 🎨 Ahmed Wael - Portfolio

A modern, interactive portfolio website showcasing projects, skills, and experience. Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for stunning animations and smooth interactions.

## ✨ Features

- **Modern Design**: Clean, elegant UI with gradient accents and glassmorphism effects
- **Interactive Animations**: Smooth transitions and animations powered by Framer Motion and GSAP
- **Responsive Layout**: Fully responsive design that works seamlessly on mobile, tablet, and desktop
- **Dark Theme**: Eye-friendly dark mode optimized for readability and reduced eye strain
- **Project Showcase**: Interactive stack component with touch/drag support for seamless project previews
- **Spotlight Effects**: Dynamic spotlight card effects on hover for enhanced visual feedback
- **Custom Components**: Reusable, well-structured React components with TypeScript support
- **Type-Safe**: Full TypeScript support for better code reliability and developer experience
- **SEO Optimized**: Built with Next.js for optimal search engine performance and fast loading
- **Advanced Visual Effects**: Gradient text, rotating text, shiny text, and tilt effects
- **Logo Loop**: Infinite carousel of technology logos demonstrating skills and tools

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16.1.4 (React 19.2.3)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + PostCSS
- **Animations**: Framer Motion, GSAP 3.14.2, Motion 12.23.12
- **Icons**: FontAwesome 7.1.0, Lucide React 0.563.0, React Simple Icons 13.8.0

### Development Tools
- **Build Tool**: Next.js with TypeScript support
- **Linting**: ESLint 9
- **Package Manager**: pnpm
- **Configuration**: Components configuration with custom utility classes

## 🏗️ Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles and CSS variables
│   ├── globals.d.ts             # Global type definitions
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Home page
│   └── loading.tsx              # Loading state
├── components/
│   ├── reactbits/               # Custom animated components library
│   │   ├── Stack.tsx            # Interactive card stack (draggable/touchable)
│   │   ├── SpotlightCard.tsx    # Card with dynamic spotlight effect
│   │   ├── GradientText.tsx     # Animated gradient text effect
│   │   ├── ShinyText.tsx        # Shiny text effect with wave animation
│   │   ├── RotatingText.tsx     # Rotating text carousel
│   │   ├── StaggeredMenu.tsx    # Staggered menu animation
│   │   ├── TiltedCard.tsx       # 3D tilt effect on hover
│   │   ├── LogoLoop.tsx         # Infinite carousel of logo loops
│   │   ├── DarkVeil.jsx         # Dark overlay component
│   │   └── DarkVeil.css         # Veil animation styles
│   └── ui/                       # Page sections and layouts
│       ├── navbar.tsx           # Navigation bar with responsive menu
│       ├── hero.tsx             # Hero/header section with intro
│       ├── navHeroContainer.tsx # Navigation + hero wrapper component
│       ├── education.tsx        # Education section with degree timeline
│       ├── experience.tsx       # Experience & certifications showcase
│       ├── projects.tsx         # Projects showcase with interactive cards
│       ├── separator.tsx        # Section separator component
│       └── footer.tsx           # Footer with contact information
├── data/                         # Static content data
│   ├── education.ts             # Education and training entries
│   ├── experience.ts            # Certifications and skills data
│   ├── graduationProject.ts     # Graduation project showcase data
│   └── techLogos.tsx            # Technology logos for display
├── types/                        # TypeScript type definitions
│   ├── education.ts             # Education data types
│   └── experience.ts            # Experience data types
├── lib/                          # Utility functions
│   └── utils.ts                 # Common utility functions
├── public/                       # Static assets
│   └── graduation-project/      # Graduation project images
├── components.json              # Component configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── eslint.config.mjs           # ESLint configuration
└── README.md                   # Project documentation
```

## 📱 Sections Overview

### Hero Section
The hero section welcomes visitors with a prominent greeting and a call-to-action. Features gradient text and smooth animations to capture attention.

### Navigation
Responsive navigation bar that adapts to different screen sizes, with smooth scrolling to different sections.

### Education Section
Displays educational background including:
- High School Diploma (Modern School Al-Shorouk, 2017-2020)
- Computer Science degree (Cairo University, 2020-2024)
- Currently pursuing: ITI OSAD 9 Months Program (2025-2026)

### Experience Section
Showcases certifications and skills obtained from:
- Front End Development (Maharatech)
- TypeScript (Maharatech)
- Flutter (ICTHUB)
- Artificial Intelligence (Huawei)
- Cloud Computing (AWS Academy)
- And more...

### Projects Section
Interactive showcase of completed projects with:
- Draggable/touchable card stack
- Spotlight effects on hover
- Detailed project information
- Graduation project showcase

### Contact Section
Direct contact information and links to:
- GitHub: [notahmedwael](https://github.com/notahmedwael)
- LinkedIn: [Ahmed Wael](https://www.linkedin.com/in/ahmed-wael-9a6389284/)
- X (Twitter): [@notahmedwael](https://x.com/notahmedwael)
- Discord: available for collaboration

## � Detailed Sections Overview

### Hero Section
The hero section welcomes visitors with a prominent greeting and a call-to-action. Features gradient text and smooth animations to capture attention. This is the first impression visitors get of your portfolio and includes:
- Dynamic gradient text effects
- Rotating text carousel
- Smooth fade-in animations
- Call-to-action buttons

### Navigation
Responsive navigation bar with advanced features:
- Sticky positioning for easy access while scrolling
- Smooth scrolling to different sections (Hero, Education, Experience, Projects, Contact)
- Mobile-friendly hamburger menu for smaller screens
- Active section highlighting based on scroll position
- Desktop and mobile optimized layout

### Education Section
Comprehensive display of educational background:
- **High School**: Modern School Al-Shorouk (2017-2020) - Excelled in Mathematics and Physics, starting programming journey
- **Bachelor's Degree**: Computer Science from Cairo University (2020-2024) - Strong focus on software engineering, data structures, algorithms, and AI
- **Current Training**: ITI OSAD 9 Months Program (2025-2026) - Full stack development with modern technologies, RAG, and fine-tuning

### Experience Section
Detailed showcase of certifications and professional development:
- **Front End Development** (Maharatech) - HTML, CSS, JavaScript ES6+ fundamentals and best practices
- **TypeScript** (Maharatech) - Compilation layer, type system, and advanced TypeScript features
- **Flutter** (ICTHUB) - Mobile development with Dart and modern app architecture
- **Artificial Intelligence** (Huawei) - Machine learning and deep learning foundations
- **Cloud Computing** (AWS Academy) - AWS cloud services and deployment strategies
- Additional professional development and online courses

### Projects Section
Interactive showcase featuring:
- **Graduation Project** with detailed images and comprehensive descriptions
- Draggable/touchable card stack for browsing multiple projects
- Spotlight effects for enhanced visual feedback and interactivity
- Complete project details including technologies used and methodologies
- Links to live demos and GitHub source code repositories

### Contact Section
Professional connections and availability status:
- **GitHub**: [@notahmedwael](https://github.com/notahmedwael) - Portfolio of open-source work and contributions
- **LinkedIn**: [Ahmed Wael](https://www.linkedin.com/in/ahmed-wael-9a6389284/) - Professional network and endorsements
- **X (Twitter)**: [@notahmedwael](https://x.com/notahmedwael) - Regular updates, insights, and industry news
- **Discord**: Available for collaboration, mentorship, and networking
- **Availability Status**: Dynamic indicator showing readiness for new projects

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18 or higher required for modern JavaScript features
- **Package Manager**: pnpm 9+ recommended for optimal performance (npm or yarn also supported)
- **Git**: For cloning and version control
- **Browser**: Modern browser with ES2020+ support

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/notahmedwael/nextjs-portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

3. **Verify installation**
```bash
node --version  # Should be v18 or higher
pnpm --version  # Should be v9 or higher
```

### Development

Start the development server with hot module reloading:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application will automatically reload when you make changes to the code.

**Features during development:**
- Hot Module Replacement (HMR) for instant updates
- Fast Refresh for React components
- TypeScript type checking
- ESLint warnings in the console

### Build for Production

Create an optimized production build:

```bash
# Build the project
pnpm build

# Start the production server locally (for testing)
pnpm start
```

The build process will:
- Optimize and minify JavaScript and CSS
- Generate optimized image assets
- Create a `.next` directory with production-ready code
- Output build analytics and performance metrics

### Code Quality & Linting

```bash
# Run ESLint to check for code style issues
pnpm lint

# Fix auto-fixable linting issues
pnpm lint -- --fix
```

## 📦 Key Components In Depth

### Stack Component (`components/reactbits/Stack.tsx`)
Interactive card carousel with comprehensive gesture support:
- **Desktop Interaction**: Click and drag to rotate through cards with smooth physics
- **Touch Support**: Full swipe gesture support for mobile devices
- **Smooth Animations**: GPU-accelerated transitions powered by Framer Motion
- **Auto-Play Mode**: Optional hands-free carousel presentation mode
- **Responsive Design**: Adapts card size and spacing for different screen sizes
- **Touch-Optimized**: Built specifically for optimal mobile experience

### SpotlightCard (`components/reactbits/SpotlightCard.tsx`)
Advanced card component with dynamic lighting effects:
- **Mouse Tracking**: Spotlight follows cursor movement in real-time
- **Performance Optimized**: Uses requestAnimationFrame for 60fps updates
- **Customizable Appearance**: Spotlight color, size, and blur amount adjustable
- **Glassmorphism Effect**: Modern frosted glass appearance with backdrop blur
- **Fallback Support**: Graceful degradation for browsers without support

### GradientText (`components/reactbits/GradientText.tsx`)
Animated text with dynamic gradient effects:
- **Smooth Animation**: Gradient smoothly shifts across the text
- **Color Customization**: Define custom gradient start and end colors
- **Performance**: GPU-accelerated animations using CSS transforms
- **Responsive**: Adapts to different text sizes and screen widths

### ShinyText (`components/reactbits/ShinyText.tsx`)
Text with sweeping shine effect:
- **Wave Animation**: Smooth wave effect travels across the text
- **Customizable Duration**: Adjust animation speed and timing
- **Lightweight**: Minimal performance impact with CSS-based animation

### RotatingText (`components/reactbits/RotatingText.tsx`)
Word carousel with fade in/out transitions:
- **Word Rotation**: Cycles through word array automatically
- **Fade Transitions**: Smooth opacity transitions between words
- **Customizable Speed**: Adjust rotation interval and animation duration

### TiltedCard (`components/reactbits/TiltedCard.tsx`)
3D perspective tilt effect on mouse movement:
- **3D Transform**: Creates depth perception with CSS perspective
- **Mouse Tracking**: Tilt follows mouse position dynamically
- **Smooth Interpolation**: Easing for natural motion feel
- **Mobile Support**: Fallback to static display on touch devices

### LogoLoop (`components/reactbits/LogoLoop.tsx`)
Infinite carousel of technology logos:
- **Auto-Scroll**: Continuous smooth scrolling of logos
- **Responsive Sizing**: Adapts logo size for different screen sizes
- **Performance**: Optimized for smooth 60fps animation
- **Accessibility**: Proper image alt text and semantic structure

### DarkVeil (`components/reactbits/DarkVeil.jsx`)
Dark overlay component for modal/emphasis effects:
- **Smooth Fade**: CSS animation for fade in/out
- **Click Handling**: Optional click-to-dismiss functionality
- **Z-Index Management**: Proper stacking context

## 📱 Mobile Optimization Strategy

The portfolio implements comprehensive mobile-first design principles:

### Touch Interactions
- **Drag/Swipe Support**: All drag-based components have equivalent touch gestures
- **Touch Feedback**: Visual feedback for touch interactions (active states)
- **Gesture Recognition**: Proper handling of swipe velocity and momentum

### Responsive Layout
- **CSS Grid & Flexbox**: Modern layout techniques for adaptive design
- **Breakpoint Strategy**: Optimized breakpoints for common device sizes
- **Fluid Typography**: Text scales appropriately using clamp()
- **Fluid Spacing**: Margins and padding scale with viewport

### Image Optimization
- **Next.js Image Component**: Automatic format selection and optimization
- **Responsive Images**: srcset generation for different device pixel ratios
- **Lazy Loading**: Images below the fold load on-demand
- **WebP Support**: Modern format with PNG fallback

### Performance Considerations
- **Code Splitting**: Route-based and dynamic imports reduce initial bundle
- **Image Lazy Loading**: Off-screen images load when approaching viewport
- **CSS Minification**: Tailwind purges unused styles
- **Component Memoization**: React optimization for expensive components

## 🎯 Advanced Features

### Animation System Architecture
- **Framer Motion**: Component-level animations with gesture support
- **GSAP**: Timeline-based animations for complex sequences
- **CSS Animations**: Tailwind utilities for simple, highly performant effects
- **Stagger Effects**: Sequential animations for improved visual hierarchy
- **Spring Physics**: Natural-feeling motion with customizable tension/friction

### Responsive Design Breakpoints
```
- Mobile: < 640px (sm)
- Tablet Portrait: 640px - 768px (md)
- Tablet Landscape: 768px - 1024px (lg)
- Desktop: 1024px - 1280px (xl)
- Large Desktop: > 1280px (2xl)
```

### Dark Mode Theme System
- **Color Palette**: Carefully chosen colors for optimal contrast and readability
- **CSS Variables**: Theme customization via `globals.css`
- **Eye-Friendly**: Dark background reduces eye strain in low-light environments
- **Accent Colors**: High contrast accent colors for interactive elements

### SEO & Social Media Optimization
- **Meta Tags**: Proper title, description, and canonical URLs
- **Open Graph**: Social media preview optimization with og: tags
- **Twitter Card**: Optimized preview for Twitter/X sharing
- **Structured Data**: Schema.org markup for search engines
- **Semantic HTML**: Proper heading hierarchy and semantic elements

## 🔧 Configuration & Customization

### Styling Configuration

**globals.css** - Global styles and CSS variables
```css
:root {
  --brand-primary: /* primary color */
  --brand-accent: /* accent color */
  --brand-light: /* light text color */
  /* ... other variables */
}
```

**tailwind.config.ts** - Tailwind CSS customization
- Custom color palette extensions
- Custom animation definitions
- Plugin configuration
- Theme customization

**postcss.config.mjs** - PostCSS plugins and transformations
- Tailwind CSS processing
- Autoprefixer for browser compatibility
- Additional CSS transformations

### Build Configuration

**next.config.ts** - Next.js optimizations
- Image optimization domains
- Compression settings
- Environment-specific configurations
- Performance optimizations

**tsconfig.json** - TypeScript compiler options
- Path aliases (`@/` for root imports)
- Module resolution
- Strict type checking
- Library generation options

**components.json** - UI component configuration
- Component library settings
- Style configuration
- Alias path setup

### Code Quality Tools

**eslint.config.mjs** - ESLint rules and configuration
- Code style enforcement
- Best practices validation
- Automatic fixes on save
- Next.js-specific rules

**TypeScript** - Full type safety
- Strict mode enabled
- No implicit any
- Comprehensive type definitions
- Type-safe imports

## 📄 Environment Variables

No environment variables required for basic functionality. The project is configured to work out of the box:

- **Remote Image Optimization**: Configured CDN domains in `next.config.ts`
- **Static Data Sources**: All data from TypeScript files, no API calls needed
- **Client-Side Rendering**: Full functionality without server-side dependencies
- **Optional**: Add analytics, tracking, or custom domains as needed

To add custom environment variables:

```bash
# Create .env.local file
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📚 Learning Resources & Documentation

### Official Documentation
- [Next.js 16 Documentation](https://nextjs.org/docs) - Latest Next.js features and guides
- [React 19 Features](https://react.dev) - React documentation and best practices
- [TypeScript Handbook](https://www.typescriptlang.org/docs) - Comprehensive TypeScript guide

### Styling & Animation
- [Tailwind CSS v4](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion Guide](https://www.framer.com/motion) - Animation library tutorials
- [GSAP Tutorials](https://greensock.com/docs) - Advanced animation platform

### Related Technologies
- [Lucide Icons](https://lucide.dev) - Icon library documentation
- [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image) - Image component guide
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) - MDN web docs

## 🚀 Deployment Guide

### Deploy on Vercel (Recommended)

Vercel is the official deployment platform for Next.js with zero configuration:

**Option 1: Via Vercel CLI**
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

**Option 2: Connect GitHub Repository**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select GitHub repository
5. Click "Deploy"
6. Vercel automatically deploys on every push to main

**Benefits of Vercel:**
- Zero configuration deployment
- Automatic HTTPS and CDN
- Serverless functions support
- Edge Middleware
- One-click rollbacks

### Deploy on Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
pnpm build

# Deploy to Netlify
netlify deploy --prod --dir=.next
```

Or connect GitHub repository for automatic deployments.

### Deploy on AWS Amplify

1. Push to GitHub repository
2. Go to AWS Amplify console
3. Connect GitHub account
4. Select repository and branch
5. Configure build settings (auto-detected for Next.js)
6. Deploy with automatic CI/CD

### Deploy on Railway

```bash
# Install Railway CLI
npm i -g railway

# Login to Railway
railway login

# Create new project and deploy
railway up
```

### Deploy on DigitalOcean App Platform

1. Connect GitHub repository
2. Create new App
3. Configure as Node.js app
4. Set build command: `pnpm build`
5. Set start command: `pnpm start`
6. Deploy automatically

### Self-Hosted Deployment

For VPS or dedicated server:

```bash
# Build the project
pnpm build

# Install PM2 for process management
npm install -g pm2

# Start the application
pm2 start npm --name "portfolio" -- start

# Setup auto-restart on reboot
pm2 startup
pm2 save

# Access via http://your-domain.com:3000
# Use nginx/apache as reverse proxy for port 80
```

### Custom Domain Setup

For any hosting platform:
1. Update DNS records to point to deployment platform
2. Configure SSL certificate (automatic on Vercel/Netlify)
3. Update `NEXT_PUBLIC_SITE_URL` in environment variables if needed
4. Verify domain propagation

See [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific guides.

## 📊 Performance Optimization

### Image Optimization Strategy
- **Next.js Image Component**: Automatic format conversion (WebP, AVIF)
- **Responsive Images**: Automatic srcset generation
- **Lazy Loading**: Off-screen images load on demand
- **Placeholder**: Blur placeholder while loading
- **CDN Support**: Multiple image CDNs configured

### Code Splitting & Loading
- **Route-Based Splitting**: Each page loads only required code
- **Dynamic Imports**: Components lazy loaded on demand
- **CSS Purging**: Tailwind removes unused styles
- **Tree-Shaking**: Unused exports removed by bundler

### Runtime Performance
- **GPU Acceleration**: Animations use transform/opacity
- **Debounced Handlers**: Scroll/resize events optimized
- **Component Memoization**: React.memo for expensive components
- **Efficient Re-renders**: Proper dependency arrays in hooks

### Caching Strategy
- **Browser Caching**: Static assets cached indefinitely
- **CDN Caching**: Images and assets cached globally
- **ISR**: Incremental Static Regeneration if needed

## 🔐 Security Best Practices

### Input Sanitization
- No user input directly rendered
- All external data validated
- XSS protection via React escaping

### Content Security Policy
- CSP-friendly image sources
- No inline scripts
- External resources whitelisted

### Dependencies Security
- Regular dependency updates
- Audit for vulnerabilities: `npm audit`
- Use trusted package sources

### Data Privacy
- No personal data stored locally
- No tracking without consent
- GDPR-compliant if deployed in EU

## 🤝 Contributing

While this is a personal portfolio, improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add feature'`)
5. Push to branch (`git push origin feature/improvement`)
6. Open a Pull Request

## 📝 License

This project is open source and available under the **MIT License**. This means:
- ✅ You can use it as a template for your own portfolio
- ✅ You can modify and distribute it
- ✅ You must include the license notice
- ✅ No warranty is provided

See LICENSE file for complete details.

## 👤 Author & Contact

**Ahmed Wael**
- **GitHub**: [@notahmedwael](https://github.com/notahmedwael) - Open-source contributions and projects
- **LinkedIn**: [Ahmed Wael](https://www.linkedin.com/in/ahmed-wael-9a6389284/) - Professional network
- **X (Twitter)**: [@notahmedwael](https://x.com/notahmedwael) - Latest updates and insights
- **Portfolio**: This repository serves as the live portfolio
- **Current Status**: Open to new opportunities, freelancing, and collaborations

## 🙏 Acknowledgments & Credits

**Technologies & Frameworks**
- [Next.js Team](https://nextjs.org) - Revolutionary React framework
- [Tailwind Labs](https://tailwindcss.com) - Utility-first CSS
- [Framer](https://www.framer.com) - Motion library
- [React Team](https://react.dev) - UI library

**Learning & Development**
- [Cairo University](https://cu.edu.eg) - Computer Science foundation
- [ITI Program](https://iti.gov.eg) - Intensive full-stack training
- [Maharatech](https://maharatech.com) - Frontend and TypeScript courses
- [AWS Academy](https://www.awsacademy.com) - Cloud computing knowledge

**Community & Open Source**
- All open-source contributors
- Stack Overflow community
- GitHub community
- Web development community

## 📈 Future Improvements & Roadmap

Potential enhancements planned:
- [ ] Blog section with articles
- [ ] Advanced analytics integration
- [ ] Dark/Light mode toggle
- [ ] Multiple language support (i18n)
- [ ] Email contact form with validation
- [ ] Project filter/search functionality
- [ ] Testimonials section
- [ ] Newsletter subscription
- [ ] Advanced animations with Scroll-driven animations
- [ ] Progressive Web App (PWA) support

## 🐛 Known Issues & Limitations

- No backend required (static data only)
- Contact form requires custom implementation
- Blog features not implemented (future update)
- Some animations optimized for modern browsers (graceful degradation for older browsers)

---

**Made with ❤️ using modern web technologies**

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: Complete and Production-Ready
