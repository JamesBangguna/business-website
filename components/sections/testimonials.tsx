'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/layout/section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function TestimonialsSection() {
  const { labels, testimonials } = siteConfig;
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const current = testimonials[index];

  return (
    <Section id='testimonials' className='bg-muted/30'>
      <div className='text-center max-w-2xl mx-auto mb-12'>
        <p className='text-sm font-medium text-primary mb-2'>
          {labels.testimonials.subtitle}
        </p>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          {labels.testimonials.title}
        </h2>
        <p className='mt-4 text-muted-foreground'>
          {labels.testimonials.description}
        </p>
      </div>

      <div className='relative max-w-3xl mx-auto'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className='border-none shadow-lg'>
              <CardContent className='p-8 md:p-10'>
                <div className='flex gap-1 mb-6'>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className='h-5 w-5 fill-yellow-400 text-yellow-400'
                    />
                  ))}
                </div>
                <blockquote className='text-lg md:text-xl leading-relaxed text-foreground'>
                  “{current.content}”
                </blockquote>
                <div className='mt-8 flex items-center gap-4'>
                  <Avatar className='h-12 w-12'>
                    <AvatarImage src={current.avatar} alt={current.name} />
                    <AvatarFallback>
                      {current.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='font-semibold'>{current.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {current.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className='mt-6 flex items-center justify-center gap-3'>
          <Button
            variant='outline'
            size='icon'
            onClick={prev}
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='h-4 w-4' />
          </Button>
          <div className='flex gap-1.5'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <Button
            variant='outline'
            size='icon'
            onClick={next}
            aria-label='Next testimonial'
          >
            <ChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </Section>
  );
}
