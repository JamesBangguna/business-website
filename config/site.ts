/**
 * Site Configuration
 * ==================
 * Central place to customize branding, content labels, and contact info.
 * Change values here to re-skin the entire template for different use cases:
 * - Creative Agency (default demo)
 * - Company / Corporate
 * - School / Education
 * - Non-profit Organization
 * - Local Business
 */

export type UseCase =
  | 'agency'
  | 'company'
  | 'school'
  | 'organization'
  | 'local-business';

export const siteConfig = {
  // ─────────────────────────────────────────────
  // BRANDING (edit these first when re-selling)
  // ─────────────────────────────────────────────
  name: 'Aether Studio',
  tagline: 'Design. Build. Elevate.',
  description:
    'We craft digital experiences that convert visitors into loyal customers. Strategy, design, and development under one roof.',
  url: 'https://aetherstudio.example.com',
  ogImage: '/images/og-default.jpg',
  logoText: 'Aether',
  useCase: 'agency' as UseCase,

  // ─────────────────────────────────────────────
  // CONTACT & SOCIAL
  // ─────────────────────────────────────────────
  contact: {
    email: 'hello@aetherstudio.example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Creative Ave, Suite 400, San Francisco, CA 94107',
    hours: 'Mon – Fri: 9:00 AM – 6:00 PM PST',
  },
  social: {
    twitter: 'https://twitter.com/aetherstudio',
    linkedin: 'https://linkedin.com/company/aetherstudio',
    instagram: 'https://instagram.com/aetherstudio',
    github: 'https://github.com/aetherstudio',
  },

  // ─────────────────────────────────────────────
  // NAVIGATION
  // ─────────────────────────────────────────────
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Work', href: '/portfolio' },
    { title: 'Contact', href: '/contact' },
  ],

  // ─────────────────────────────────────────────
  // SECTION LABELS
  // ─────────────────────────────────────────────
  labels: {
    services: {
      title: 'Our Services',
      subtitle: 'What we do best',
      description:
        'From brand identity to full-scale digital products, we deliver end-to-end solutions tailored to your goals.',
    },
    about: {
      title: 'About Us',
      subtitle: 'Who we are',
      description:
        'A collective of designers, developers, and strategists obsessed with craft and results.',
    },
    portfolio: {
      title: 'Selected Work',
      subtitle: 'Projects that speak',
      description: 'A curated selection of recent projects across industries.',
    },
    testimonials: {
      title: 'Client Stories',
      subtitle: 'What people say',
      description:
        "Don't take our word for it — hear from the teams we partner with.",
    },
    pricing: {
      title: 'Simple Pricing',
      subtitle: 'Transparent plans',
      description:
        'Choose the engagement model that fits your stage and budget.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Got questions?',
      description:
        'Everything you need to know before starting a project with us.',
    },
    cta: {
      title: 'Ready to start something great?',
      description:
        "Tell us about your project. We'll get back within one business day.",
      primaryButton: 'Start a Project',
      secondaryButton: 'View Our Work',
    },
  },

  // ─────────────────────────────────────────────
  // HERO CONTENT
  // ─────────────────────────────────────────────
  hero: {
    badge: 'Award-winning creative studio',
    headline: 'We design digital experiences that grow brands',
    subheadline:
      "Strategy, brand, product design and development for ambitious companies. Let's build something remarkable together.",
    primaryCta: { label: 'Get in Touch', href: '/contact' },
    secondaryCta: { label: 'See Our Work', href: '/portfolio' },
  },

  // ─────────────────────────────────────────────
  // STATS
  // ─────────────────────────────────────────────
  stats: [
    { value: 120, suffix: '+', label: 'Projects Delivered' },
    { value: 45, suffix: '+', label: 'Happy Clients' },
    { value: 12, suffix: '', label: 'Years Experience' },
    { value: 98, suffix: '%', label: 'Client Retention' },
  ],

  // ─────────────────────────────────────────────
  // SERVICES
  // ─────────────────────────────────────────────
  services: [
    {
      id: 'brand',
      title: 'Brand Strategy & Identity',
      description:
        'Positioning, visual identity systems, and guidelines that make your brand unforgettable.',
      icon: 'Palette',
      href: '/services#brand',
    },
    {
      id: 'web',
      title: 'Web Design & Development',
      description:
        'High-performance websites and web apps built with modern stacks and conversion in mind.',
      icon: 'Code2',
      href: '/services#web',
    },
    {
      id: 'product',
      title: 'Product Design',
      description:
        'User research, wireframes, prototypes and polished UI that users love.',
      icon: 'Layers',
      href: '/services#product',
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description:
        'Campaign strategy, content systems and performance marketing that drive measurable growth.',
      icon: 'TrendingUp',
      href: '/services#marketing',
    },
    {
      id: 'motion',
      title: 'Motion & Interaction',
      description:
        'Micro-interactions, animations and motion design that elevate the experience.',
      icon: 'Sparkles',
      href: '/services#motion',
    },
    {
      id: 'consulting',
      title: 'Creative Consulting',
      description:
        'Workshops, design audits and ongoing creative direction for in-house teams.',
      icon: 'Lightbulb',
      href: '/services#consulting',
    },
  ],

  // ─────────────────────────────────────────────
  // PORTFOLIO
  // ─────────────────────────────────────────────
  portfolio: [
    {
      id: 'nova',
      title: 'Nova Fintech',
      category: 'Brand + Product',
      description:
        'Complete rebrand and mobile-first product redesign for a rising fintech.',
      image: '/images/portfolio-1.jpg',
      tags: ['Branding', 'UI/UX', 'Mobile'],
    },
    {
      id: 'lumen',
      title: 'Lumen Health',
      category: 'Website',
      description:
        'Marketing site and patient portal experience for a digital health platform.',
      image: '/images/portfolio-2.jpg',
      tags: ['Web Design', 'Development'],
    },
    {
      id: 'orbit',
      title: 'Orbit Commerce',
      category: 'E-commerce',
      description: 'Headless commerce storefront with custom design system.',
      image: '/images/portfolio-3.jpg',
      tags: ['E-commerce', 'Design System'],
    },
    {
      id: 'pulse',
      title: 'Pulse Media',
      category: 'Campaign',
      description:
        'Brand campaign and interactive microsite for a media launch.',
      image: '/images/portfolio-4.jpg',
      tags: ['Campaign', 'Motion'],
    },
  ],

  // ─────────────────────────────────────────────
  // TESTIMONIALS
  // ─────────────────────────────────────────────
  testimonials: [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO, Nova Fintech',
      content:
        'Aether transformed how our users experience the product. The attention to detail and strategic thinking exceeded every expectation.',
      rating: 5,
      avatar: '/images/avatar-1.jpg',
    },
    {
      id: 2,
      name: 'Marcus Rivera',
      role: 'Head of Brand, Lumen Health',
      content:
        'Working with the team felt like an extension of our own. They delivered a brand system we still use and love two years later.',
      rating: 5,
      avatar: '/images/avatar-2.jpg',
    },
    {
      id: 3,
      name: 'Elena Park',
      role: 'Founder, Orbit Commerce',
      content:
        'From discovery to launch, the process was seamless. Our conversion rate jumped 40% within the first month.',
      rating: 5,
      avatar: '/images/avatar-3.jpg',
    },
  ],

  // ─────────────────────────────────────────────
  // PRICING
  // ─────────────────────────────────────────────
  pricing: [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for early-stage brands and simple sites.',
      price: { monthly: 2499, yearly: 24990 },
      features: [
        'Brand discovery workshop',
        '5-page marketing website',
        'Responsive design',
        'Basic SEO setup',
        '2 rounds of revisions',
        '30 days support',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      id: 'growth',
      name: 'Growth',
      description: 'For companies ready to scale their digital presence.',
      price: { monthly: 5999, yearly: 59990 },
      features: [
        'Full brand identity system',
        'Custom web experience',
        'CMS integration',
        'Advanced analytics',
        'Unlimited revisions (project phase)',
        '90 days support',
        'Performance optimization',
      ],
      cta: 'Choose Growth',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'End-to-end partnership for complex products.',
      price: { monthly: 0, yearly: 0 },
      features: [
        'Dedicated team',
        'Product design & development',
        'Design system & component library',
        'Ongoing retainer option',
        'Priority support',
        'Quarterly strategy reviews',
        'Custom SLAs',
      ],
      cta: 'Contact Sales',
      popular: false,
      custom: true,
    },
  ],

  // ─────────────────────────────────────────────
  // FAQ
  // ─────────────────────────────────────────────
  faqs: [
    {
      question: 'How long does a typical project take?',
      answer:
        "Most branding and website projects run 6–12 weeks depending on scope. Product design engagements are often longer and iterative. We'll give you a clear timeline after the discovery call.",
    },
    {
      question: 'Do you work with startups as well as established companies?',
      answer:
        'Yes. We work with early-stage startups, scale-ups, and established brands. Our process adapts to your stage, budget, and speed requirements.',
    },
    {
      question: 'What does the discovery process look like?',
      answer:
        'We start with a kickoff workshop to understand your goals, audience, and constraints. Then we research, synthesize insights, and present a strategic direction before any visual work begins.',
    },
    {
      question: 'Can you work with our existing in-house team?',
      answer:
        "Absolutely. Many clients bring us in for specialized work or to augment their internal design and engineering capacity. We're happy to collaborate.",
    },
    {
      question: 'What is included in post-launch support?',
      answer:
        'Every project includes a support window (30–90 days depending on the plan). After that we offer flexible retainer packages for ongoing design, development, and optimization.',
    },
  ],

  // ─────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────
  footer: {
    description:
      'Aether Studio is a creative agency focused on brand, product, and digital experiences that drive real results.',
    copyright: `© ${new Date().getFullYear()} Aether Studio. All rights reserved.`,
  },
} as const;

export type SiteConfig = typeof siteConfig;
