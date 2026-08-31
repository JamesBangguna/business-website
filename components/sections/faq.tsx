'use client';

import { siteConfig } from '@/config/site';
import { Section } from '@/components/layout/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  const { labels, faqs } = siteConfig;

  return (
    <Section id='faq' className='bg-muted/30'>
      <div className='text-center max-w-2xl mx-auto mb-12'>
        <p className='text-sm font-medium text-primary mb-2'>
          {labels.faq.subtitle}
        </p>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          {labels.faq.title}
        </h2>
        <p className='mt-4 text-muted-foreground'>{labels.faq.description}</p>
      </div>

      <div className='mx-auto max-w-3xl'>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className='text-left text-base'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-muted-foreground leading-relaxed'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
