import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Container } from './container';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className='border-t bg-muted/40'>
      <Container>
        <div className='grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand */}
          <div className='space-y-4'>
            <Link
              href='/'
              className='flex items-center gap-2 font-bold text-lg'
            >
              <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold'>
                A
              </span>
              {siteConfig.name}
            </Link>
            <p className='text-sm text-muted-foreground max-w-xs'>
              {siteConfig.footer.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className='mb-4 text-sm font-semibold'>Navigate</h4>
            <ul className='space-y-2 text-sm'>
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='mb-4 text-sm font-semibold'>Contact</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className='hover:text-foreground transition-colors'
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className='hover:text-foreground transition-colors'
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className='max-w-200px'>{siteConfig.contact.address}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className='mb-4 text-sm font-semibold'>Follow us</h4>
            <ul className='space-y-2 text-sm'>
              {Object.entries(siteConfig.social).map(([key, url]) => (
                <li key={key}>
                  <a
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-foreground transition-colors capitalize'
                  >
                    {key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator />

        <div className='flex flex-col items-center justify-between gap-4 py-6 text-sm text-muted-foreground md:flex-row'>
          <p>{siteConfig.footer.copyright}</p>
          <p className='text-xs'>
            Built with Next.js · Template by Business Website Starter
          </p>
        </div>
      </Container>
    </footer>
  );
}
