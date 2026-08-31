import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Palette,
  Code2,
  Layers,
  TrendingUp,
  Sparkles,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/layout/section';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Services',
  description: siteConfig.labels.services.description,
};

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Code2,
  Layers,
  TrendingUp,
  Sparkles,
  Lightbulb,
};

export default function ServicesPage() {
  const { labels, services } = siteConfig;

  return (
    <>
      <Section withAnimation={false} className='pt-12 md:pt-20'>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium text-primary mb-2'>
            {labels.services.subtitle}
          </p>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            {labels.services.title}
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            {labels.services.description}
          </p>
        </div>
      </Section>

      <Section>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <Card key={service.id} id={service.id} className='scroll-mt-24'>
                <CardHeader>
                  <div className='mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <CardTitle className='text-lg'>{service.title}</CardTitle>
                  <CardDescription className='leading-relaxed'>
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className='mt-16 text-center'>
          <h2 className='text-2xl font-bold'>Not sure where to start?</h2>
          <p className='mt-2 text-muted-foreground'>
            Book a free discovery call and we&apos;ll map the right path.
          </p>
          <Button asChild size='lg' className='mt-6'>
            <Link href='/contact'>Talk to us</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
