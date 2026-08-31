'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='ghost'
      size='icon'
      className='h-9 w-9'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle theme'
    >
      {/* Ikon Matahari muncul saat tema gelap (untuk di-klik menjadi terang) */}
      <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />

      {/* Ikon Bulan muncul saat tema terang (untuk di-klik menjadi gelap) */}
      <AbsoluteMoon />
    </Button>
  );
}

function AbsoluteMoon() {
  return (
    <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
  );
}
