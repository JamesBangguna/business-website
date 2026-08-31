'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Helper lokal untuk format harga jika belum ada di utils
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export function PricingSection() {
  const { labels, pricing } = siteConfig;
  const [yearly, setYearly] = useState(false);

  return (
    <Section id='pricing'>
      <div className='text-center max-w-2xl mx-auto mb-12'>
        <p className='text-sm font-medium text-primary mb-2'>
          {labels.pricing.subtitle}
        </p>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          {labels.pricing.title}
        </h2>
        <p className='mt-4 text-muted-foreground'>
          {labels.pricing.description}
        </p>

        {/* Toggle */}
        <div className='mt-8 inline-flex items-center gap-3 rounded-full border p-1'>
          <button
            onClick={() => setYearly(false)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              !yearly
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={cn(
              'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
              yearly
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Yearly
            <span className='ml-1 text-xs opacity-80'>Save ~17%</span>
          </button>
        </div>
      </div>

      <div className='grid gap-6 lg:grid-cols-3'>
        {pricing.map((tier, i) => {
          const currentPrice = yearly ? tier.price.yearly : tier.price.monthly;
          const isCustom = currentPrice === 0; // Atau sesuaikan dengan struktur data Anda

          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Card
                className={cn(
                  'relative h-full flex flex-col',
                  tier.popular && 'border-primary shadow-lg scale-[1.02]'
                )}
              >
                {tier.popular && (
                  <Badge className='absolute -top-3 left-1/2 -translate-x-1/2'>
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className='text-xl'>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className='mt-4'>
                    {isCustom ? (
                      <span className='text-3xl font-bold'>Custom</span>
                    ) : (
                      <>
                        <span className='text-4xl font-bold tracking-tight'>
                          {formatPrice(currentPrice)}
                        </span>
                        <span className='text-muted-foreground text-sm'>
                          {yearly ? ' / year' : ' / month'}
                        </span>
                      </>
                    )}
                  </div>
                </CardHeader>
                <CardContent className='flex-1'>
                  <ul className='space-y-3'>
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className='flex items-start gap-2 text-sm'
                      >
                        <Check className='h-4 w-4 text-primary shrink-0 mt-0.5' />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className='w-full'
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    <Link href='/contact'>{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
