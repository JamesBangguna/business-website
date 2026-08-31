import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/layout/section';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Work',
  description: siteConfig.labels.portfolio.description,
};

export default function PortfolioPage() {
  const { labels, portfolio } = siteConfig;

  return (
    <>
      <Section withAnimation={false} className='pt-12 md:pt-20'>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium text-primary mb-2'>
            {labels.portfolio.subtitle}
          </p>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            {labels.portfolio.title}
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            {labels.portfolio.description}
          </p>
        </div>
      </Section>

      <Section>
        <div className='grid gap-8 sm:grid-cols-2'>
          {portfolio.map((item) => (
            <Card key={item.id} className='overflow-hidden group'>
              <div className='aspect-16/10 bg-linear-to-br from-primary/10 via-muted to-background flex items-center justify-center'>
                <span className='text-sm text-muted-foreground'>
                  Project image placeholder
                </span>
              </div>
              <CardHeader>
                <div className='flex items-center justify-between gap-2'>
                  <CardTitle className='text-xl'>{item.title}</CardTitle>
                  <Badge variant='secondary'>{item.category}</Badge>
                </div>
                <CardDescription className='leading-relaxed'>
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2'>
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant='outline'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
