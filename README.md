# 🚀 Business Website Starter

"Business Website Starter" — a multi-purpose website template suitable for various types of clients (companies, agencies, schools, organizations, local businesses), built using Next.js (App Router), TypeScript, and Tailwind CSS; it includes a built-in backend and is designed for easy resale as a template or starter kit.

---

# 🛠 Tech Stack

Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4

Animation

- Framer Motion

UI

- Shadcn UI
- Lucide React

Carousel

- Embla Carousel

Form

- React Hook Form
- Zod

Data Fetching

- React Query
- Axios

Utility

- clsx
- tailwind-merge

---

# 📁 Project Structure

```

creative-agency-landing/
├── app/
│ ├── fire/
│ │ └── contact/
│ │ └── route.ts # Backend: validate + save lead + send email
│ │
│ ├── about/
│ │ └── page.tsx # /about — story, vision-mission, team
│ │
│ ├── services/
│ │ └── page.tsx # /services — service/program details
│ │
│ ├── portfolio/
│ │ └── page.tsx # /portfolio — work/product showcase
│ │
│ ├── contact/
│ │ └── page.tsx # /contact — full form + info + map
│ │
│ ├── favicon.ico
│ ├── globals.css # Theme variables (reskin here)
│ ├── layout.tsx # Root layout + ThemeProvider + default metadata
│ ├── page.tsx # / — Home (summary of all sections)
│ ├── robots.ts # Auto-generate robots.txt
│ └── sitemap.ts # Auto-generate sitemap.xml
│
├── components/
│ ├── ui/ # shadcn/Radix primitives
│ │ ├── accordion.tsx
│ │ ├── avatar.tsx
│ │ ├── badge.tsx
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── form.tsx
│ │ ├── input.tsx
│ │ ├── label.tsx
│ │ ├── sonner.tsx
│ │ └── textarea.tsx
│ │
│ ├── layout/
│ │ ├── Navbar.tsx # Sticky nav, mobile hamburger, toggle, CTA
│ │ ├── Footer.tsx # Logo, nav, social, newsletter, copyright
│ │ ├── Container.tsx # Wrapper width/padding consistent
│ │ └── SectionWrapper.tsx # Scroll animation (fade/slide/stagger, viewport trigger)
│ │
│ ├── sections/
│ │ ├── Hero.tsx # Headline, dual CTA, hero image + animation
│ │ ├── Services.tsx # Grid cards (relabel: Programs/What We Do)
│ │ ├── About.tsx # Summary + counter statistics
│ │ ├── Testimonials.tsx # Carousel reviews
│ │ ├── Pricing.tsx # 3 tier + toggle monthly/yearly
│ │ ├── FAQ.tsx # Accordion FAQ
│ │ └── Contact.tsx # Wrapper: ContactForm + info + map
│ │
│ ├── shared/
│ │ ├── ServiceCard.tsx
│ │ ├── TestimonialCard.tsx
│ │ ├── PricingCard.tsx
│ │ ├── FAQAccordion.tsx
│ │ ├── PortfolioCard.tsx
│ │ └── Counter.tsx # Animated number counter
│ │
│ ├── ContactForm.tsx # react-hook-form + zod, loading/success/error
│ ├── ThemeProvider.tsx # next-themes wrapper
│ └── ThemeToggle.tsx # Dark/Light switch
│
├── lib/
│ ├── utils.ts # cn() helper
│ ├── prisma.ts # Prisma client singleton (optional)
│ ├── validations/
│ │ └── contact.ts # zod schema contact form
│ └── constants/
│ ├── nav-links.ts # Navigation data (reusable Navbar/Footer)
│ └── site-config.ts # Brand name, description, social links (quick reskin)
│
├── prism/ # Optional — if save leads
│ ├── schema.prisma # Lead Model
│ └── dev.db # SQLite (gitignored)
│
├── public/
│ ├── images/
│ │ ├── hero/
│ │ ├── testimonials/
│ │ └── portfolio/
│ └── og-image.png # Default Open Graph image
│
├── types/
│ └── index.ts # Shared TypeScript types (Service, Testimonial, etc.)
│
├── .env.example
├── .env.local # (gitignored)
├── .gitignore
├── components.json # shadcn config
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json

```

# 👨‍💻 Author

Built with ❤️ using Next.js,Tailwind CSS & Framer Motion.
