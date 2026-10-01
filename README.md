# Muhammad-Afzaal

Muhammad Afzaal Portfolio Website

Premium, production-quality personal portfolio website built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Adding Your Projects

Edit [`src/data/portfolio.ts`](src/data/portfolio.ts) to add real projects:

```ts
export const projects: Project[] = [
  {
    id: "project-1",
    number: "01",
    title: "Your Project Name",
    category: "Web Application",
    description: "What this project does and the problem it solves.",
    technologies: ["React", "JavaScript", "PHP", "MySQL"],
    image: "/projects/project-1.jpg",   // place in /public/projects/
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/repo",
  },
];
```

Place project screenshots in `public/projects/` and reference them as `/projects/filename.jpg`.

---

## Adding Your Photo

Your photo should be at:

```
src/assets/profile.jpg
```

It's already copied from your `profile.png`. If you want to update it, replace that file.

---

## Updating Personal Info

All personal data is in [`src/data/portfolio.ts`](src/data/portfolio.ts):

```ts
export const personal = {
  name: "Muhammad Afzaal",
  linkedin: "https://www.linkedin.com/in/muhammad-afzaal-39377529b/",
  github: "https://github.com/",
  email: "",  // Add your email here to display it
};
```

Add your email to have it shown in the contact and footer sections.

---

## Updating Availability

In `src/data/portfolio.ts`:

```ts
export const availability = {
  status: "Open to Opportunities",
  types: ["On-site", "Hybrid", "Remote"],
};
```

---

## Project Structure

```
src/
├── assets/
│   └── profile.jpg          ← Your portrait photo
├── components/
│   ├── CustomCursor.tsx      ← Desktop-only custom cursor
│   ├── Footer.tsx            ← Minimal footer
│   ├── Navbar.tsx            ← Premium navbar with scroll behavior
│   └── RevealOnScroll.tsx    ← Reusable scroll animation components
├── data/
│   └── portfolio.ts          ← ALL CONTENT LIVES HERE (edit this!)
├── sections/
│   ├── Hero.tsx              ← Hero with portrait + animations
│   ├── About.tsx             ← About + education
│   ├── WhatIBuild.tsx        ← Services/capabilities
│   ├── TechStack.tsx         ← Tech strip + grid
│   ├── SelectedWork.tsx      ← Project portfolio
│   ├── Journey.tsx           ← Timeline
│   └── Contact.tsx           ← Contact + availability
├── utils/
│   └── hooks.ts              ← Custom React hooks
├── App.tsx
├── main.tsx
└── index.css                 ← Global styles + Tailwind theme

public/
├── projects/                 ← Place project images here
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `primary` | `#0D0F0F` | Page background |
| `charcoal` | `#151817` | Card/section backgrounds |
| `ivory` | `#F3EFE7` | Text, About/Journey sections |
| `copper` | `#C4875B` | Accent, CTAs, highlights |
| `sage` | `#9BAA9A` | Status indicators |
| `warm-gray` | `#77736C` | Secondary text |

**Fonts:** Space Grotesk (headings) + Inter (body) — loaded via Google Fonts.

---

## SEO

Update `index.html` with your real domain when deployed:

```html
<link rel="canonical" href="https://yourdomain.com/" />
<meta property="og:url" content="https://yourdomain.com/" />
```

Also update `public/sitemap.xml` with your real domain.

---

## Deployment

The `dist/` folder is production-ready. Deploy to:

- **Vercel**: `vercel deploy`
- **Netlify**: drag and drop `dist/` folder
- **GitHub Pages**: configure workflow to deploy `dist/`

---

## Tech Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4** (Vite plugin)
- **Framer Motion** (animations)
- **Lucide React** (icons, available for use)
- **Vite 8** (build tool)

© 2026 Muhammad Afzaal
