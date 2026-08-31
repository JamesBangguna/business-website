import { Hero } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { AboutSection } from '@/components/sections/about';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { PricingSection } from '@/components/sections/pricing';
import { FAQSection } from '@/components/sections/faq';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  const { labels } = siteConfig;

  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />

      {/* Final CTA */}
      <Section className='bg-primary text-primary-foreground'>
        <div className='text-center max-w-2xl mx-auto'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            {labels.cta.title}
          </h2>
          <p className='mt-4 opacity-90'>{labels.cta.description}</p>
          <div className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              asChild
              size='lg'
              variant='secondary'
              className='bg-background text-foreground hover:bg-background/90'
            >
              <Link href='/contact'>{labels.cta.primaryButton}</Link>
            </Button>
            <Button
              asChild
              size='lg'
              variant='outline'
              className='border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10'
            >
              <Link href='/portfolio'>{labels.cta.secondaryButton}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
