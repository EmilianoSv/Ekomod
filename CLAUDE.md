# Ekomod - Casas Modulares

Marketing website for sustainable modular housing in Colombia.

**Live site**: https://ekomod.com.co

## Tech Stack

- **Framework**: Astro 5.16 (SSR mode with `@astrojs/vercel`)
- **UI**: React 19, Tailwind CSS v4, shadcn/ui components
- **Animations**: Framer Motion
- **Forms**: simple-stack-form + Zod validation
- **Email**: Resend API + React Email templates
- **Icons**: Lucide React, Astro Icon (MDI Light)
- **Font**: Urbanist (via Fontsource)

## Development

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm preview    # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui primitives (button, input, dialog, etc.)
│   ├── *.astro       # Page sections (Navbar, Hero, Footer, etc.)
│   └── *.tsx         # Interactive React components
├── pages/
│   ├── index.astro   # Homepage
│   ├── api/contact.ts # Form submission endpoint
│   └── *.astro       # Legal pages (privacidad, terminos, cookies)
├── layouts/Layout.astro  # Main layout with SEO
├── emails/contactEmail.tsx
├── lib/utils.ts      # cn() utility
└── styles/global.css # Tailwind + custom animations
```

## Component Patterns

- **Astro components** (`.astro`): Static markup and page sections
- **React components** (`.tsx`): Interactive features using `client:load` or `client:visible`
- **UI components**: shadcn/ui with CVA variants in `src/components/ui/`

## Styling

- Tailwind CSS v4 with CSS variables for theming
- Primary color: `#355070` (blue)
- Accent: `#E89B33` (orange), `#6B8E23` (green)
- Custom `fade-in-up` animation in global.css
- Mobile-first responsive design

## Forms & Validation

- Contact form at `/api/contact` (POST)
- Zod schema validation (server-side)
- Email sent via Resend to konstruct.soluciones@gmail.com

## Git Workflow

- **develop**: Active development branch
- **main**: Production deployments
- Always work on `develop`, merge to `main` when ready to deploy

## Deployment

- **Platform**: Vercel (automatic via Git integration)
- **Mode**: Server-side rendering
- **Env vars**: `RESEND_API_KEY` (required for email)
- Push to `main` branch triggers production deployment

## UI/UX Guidelines

- Keep animations subtle (Framer Motion)
- Ensure mobile responsiveness (test at 375px, 768px, 1024px)
- Spanish language content for Colombian market

### Accessibility (a11y)

- Use Radix UI components for built-in accessibility
- Ensure sufficient color contrast (4.5:1 minimum)
- Add alt text to all images
- Test with keyboard navigation
- Use semantic HTML elements

### Performance

- Optimize images (WebP format, proper sizing)
- Use `client:visible` for below-fold React components
- Minimize JavaScript bundle size
- Target Core Web Vitals:
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## Adding Components

```bash
pnpm dlx shadcn@latest add [component-name]
```
