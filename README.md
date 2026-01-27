# 🎨 Ahmed Wael - Portfolio

A modern, interactive portfolio website showcasing projects, skills, and experience. Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for stunning animations and smooth interactions.

## ✨ Features

- **Modern Design**: Clean, elegant UI with gradient accents and glassmorphism effects
- **Interactive Animations**: Smooth transitions and animations powered by Framer Motion
- **Responsive Layout**: Fully responsive design that works seamlessly on mobile, tablet, and desktop
- **Dark Theme**: Eye-friendly dark mode optimized for readability
- **Project Showcase**: Interactive stack component with touch/drag support for project previews
- **Spotlight Effects**: Dynamic spotlight card effects on hover
- **Custom Components**: Reusable, well-structured React components
- **Type-Safe**: Full TypeScript support for reliability
- **SEO Optimized**: Built with Next.js for optimal search engine performance

## 🏗️ Project Structure

```
portfolio/
├── app/                          # Next.js app directory
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── loading.tsx              # Loading state
├── components/
│   ├── reactbits/               # Custom animated components
│   │   ├── Stack.tsx            # Interactive card stack (draggable/touchable)
│   │   ├── SpotlightCard.tsx    # Card with spotlight hover effect
│   │   ├── GradientText.tsx     # Gradient text animation
│   │   ├── ShinyText.tsx        # Shiny text effect
│   │   ├── RotatingText.tsx     # Rotating text animation
│   │   ├── StaggeredMenu.tsx    # Staggered menu animation
│   │   ├── TiltedCard.tsx       # 3D tilt effect on cards
│   │   ├── LogoLoop.tsx         # Infinite logo carousel
│   │   └── DarkVeil.jsx         # Dark overlay component
│   └── ui/                       # Page sections
│       ├── navbar.tsx           # Navigation bar
│       ├── hero.tsx             # Hero section
│       ├── education.tsx        # Education section
│       ├── experience.tsx       # Experience & certifications
│       ├── projects.tsx         # Projects showcase
│       └── navHeroContainer.tsx # Navigation + hero wrapper
├── data/                         # Static data
│   ├── education.ts             # Education entries
│   ├── experience.ts            # Experience entries
│   └── graduationProject.ts     # Graduation project images
├── types/                        # TypeScript type definitions
└── public/                       # Static assets
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/notahmedwael/nextjs-portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser. Changes auto-reload.

### Build & Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) - React meta-framework
- **Language**: [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion) - Production-ready motion library
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful icon library
- **Image Optimization**: Next.js Image component

## 📦 Key Components

### Stack Component
Interactive card stack with support for both mouse dragging and touch gestures:
- Rotate and pan cards with smooth animations
- Click-to-shuffle functionality
- Optional autoplay carousel mode
- Mobile-optimized touch handling

### SpotlightCard
Card component with dynamic spotlight effect on hover:
- Follows mouse movement
- Customizable spotlight color
- Smooth opacity transitions

### Hero Section
Eye-catching landing section with:
- Gradient text effects
- Rotating text animations
- Call-to-action buttons
- Responsive layout

## 📱 Mobile Optimization

- Touch-enabled interactions (drag/swipe support)
- Responsive typography and spacing
- Optimized images for different screen sizes
- Touch-friendly interactive elements

## 🎯 Features in Detail

### Projects Showcase
Interactive carousel displaying graduation project with:
- Stack-based card layout with drag support
- Detailed project information
- Technology tags
- Project status indicators

### Education & Experience
Timeline-based layout showing:
- Educational background
- Professional experience
- Certifications and courses
- Training programs

### Navigation
Sticky navigation bar with:
- Smooth scrolling to sections
- Mobile menu support
- Active section highlighting

## 📄 Environment Variables

No environment variables required for local development. The project works out of the box.

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `next.config.ts` - Next.js configuration
- `eslint.config.mjs` - ESLint rules
- `postcss.config.mjs` - PostCSS plugins

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🚀 Deployment

### Deploy on Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy via Vercel dashboard
# https://vercel.com/new
```

### Deploy on Other Platforms

The project can be deployed to any Node.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean

See [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Ahmed Wael**
- GitHub: [@notahmedwael](https://github.com/notahmedwael)
- Portfolio: [https://ahmed-wael-portfolio.vercel.app](https://ahmed-wael-portfolio.vercel.app)

---

Made with ❤️ and modern web technologies
