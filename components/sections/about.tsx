'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function AnimatedCounter({
  value,
  suffix = '',
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection() {
  const { labels, stats, description } = siteConfig;

  return (
    <Section id='about'>
      <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 items-center'>
        <div>
          <p className='text-sm font-medium text-primary mb-2'>
            {labels.about.subtitle}
          </p>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
            {labels.about.title}
          </h2>
          <p className='mt-4 text-muted-foreground leading-relaxed'>
            {labels.about.description}
          </p>
          <p className='mt-4 text-muted-foreground leading-relaxed'>
            {description}
          </p>
          <Button asChild className='mt-8'>
            <Link href='/about'>Learn more about us</Link>
          </Button>
        </div>

        <div className='grid grid-cols-2 gap-6'>
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className='rounded-xl border bg-card p-6 text-center shadow-sm'
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className='text-3xl font-bold tracking-tight text-primary sm:text-4xl'>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className='mt-2 text-sm text-muted-foreground'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
