'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
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
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Palette,
  Code2,
  Layers,
  TrendingUp,
  Sparkles,
  Lightbulb,
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function ServicesSection() {
  const { labels, services } = siteConfig;

  return (
    <Section id='services' className='bg-muted/30'>
      <div className='text-center max-w-2xl mx-auto mb-12'>
        <p className='text-sm font-medium text-primary mb-2'>
          {labels.services.subtitle}
        </p>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          {labels.services.title}
        </h2>
        <p className='mt-4 text-muted-foreground'>
          {labels.services.description}
        </p>
      </div>

      <motion.div
        className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-60px' }}
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Sparkles;
          return (
            <motion.div key={service.id} variants={item}>
              <Link href={service.href} className='block h-full'>
                <Card className='h-full group hover:border-primary/40 transition-colors'>
                  <CardHeader>
                    <div
                      className={cn(
                        'mb-3 flex h-11 w-11 items-center justify-center rounded-lg',
                        'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors'
                      )}
                    >
                      <Icon className='h-5 w-5' />
                    </div>
                    <CardTitle className='text-lg'>{service.title}</CardTitle>
                    <CardDescription className='text-sm leading-relaxed'>
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
