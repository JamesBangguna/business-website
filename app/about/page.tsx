import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: siteConfig.labels.about.description,
};

export default function AboutPage() {
  const { labels, stats, description, name } = siteConfig;

  return (
    <>
      <Section withAnimation={false} className='pt-12 md:pt-20'>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium text-primary mb-2'>
            {labels.about.subtitle}
          </p>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            {labels.about.title}
          </h1>
          <p className='mt-6 text-lg text-muted-foreground leading-relaxed'>
            {labels.about.description}
          </p>
          <p className='mt-4 text-muted-foreground leading-relaxed'>
            {description}
          </p>
        </div>
      </Section>

      <Section className='bg-muted/30'>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='rounded-xl border bg-card p-6 text-center shadow-sm'
            >
              <div className='text-3xl font-bold text-primary'>
                {stat.value}
                {stat.suffix}
              </div>
              <p className='mt-2 text-sm text-muted-foreground'>{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className='max-w-3xl space-y-6'>
          <h2 className='text-2xl font-bold tracking-tight'>Our Mission</h2>
          <p className='text-muted-foreground leading-relaxed'>
            At {name}, we believe great design is more than aesthetics — it is a
            strategic advantage. We partner with ambitious teams to craft brands
            and digital products that resonate, convert, and scale.
          </p>
          <h2 className='text-2xl font-bold tracking-tight pt-4'>
            Our Approach
          </h2>
          <p className='text-muted-foreground leading-relaxed'>
            We start with deep discovery, move into strategy, then design and
            build with precision. Every decision is grounded in research and
            measured against real business outcomes.
          </p>
          <div className='pt-6'>
            <Button asChild size='lg'>
              <Link href='/contact'>Work with us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
