'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ThemeToggle';
import { Container } from './container';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className='flex h-16 items-center justify-between md:h-18'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-2 font-bold text-xl tracking-tight'
          >
            <span className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold'>
              A
            </span>
            <span className='hidden sm:inline-block'>{siteConfig.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className='hidden md:flex items-center gap-1'>
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className='flex items-center gap-2'>
            <ModeToggle />
            <Button asChild size='sm' className='hidden sm:inline-flex'>
              <Link href='/contact'>Get in Touch</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant='ghost'
              size='icon'
              className='md:hidden'
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className='md:hidden border-t bg-background'
          >
            <Container>
              <nav className='flex flex-col gap-1 py-4'>
                {siteConfig.mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'px-3 py-3 text-base font-medium rounded-md transition-colors',
                      pathname === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted'
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
                <Button
                  asChild
                  className='mt-2 w-full'
                  onClick={() => setOpen(false)}
                >
                  <Link href='/contact'>Get in Touch</Link>
                </Button>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
