'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className='relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28'>
      {/* Background gradient */}
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background' />

      <Container>
        <motion.div
          className='mx-auto max-w-3xl text-center'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={item}>
            <Badge variant='secondary' className='mb-6 gap-1.5 px-3 py-1'>
              <Sparkles className='h-3.5 w-3.5' />
              {hero.badge}
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className='mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto'
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-4'
          >
            <Button asChild size='lg' className='gap-2'>
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          className='mt-16 mx-auto max-w-4xl'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className='relative aspect-video rounded-2xl border bg-linear-to-br from-primary/5 via-muted/50 to-background shadow-2xl overflow-hidden'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='text-center space-y-2 p-8'>
                <div className='mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center'>
                  <Sparkles className='h-8 w-8 text-primary' />
                </div>
                <p className='text-sm font-medium text-muted-foreground'>
                  Your hero visual / product screenshot goes here
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
