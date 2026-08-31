'use client';

import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Container } from './container';

interface SectionProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'
> {
  children: React.ReactNode;
  containerSize?: 'default' | 'narrow' | 'wide';
  withAnimation?: boolean;
  id?: string;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function Section({
  children,
  className,
  containerSize = 'default',
  withAnimation = true,
  id,
  ...props
}: SectionProps) {
  const content = <Container size={containerSize}>{children}</Container>;

  if (!withAnimation) {
    return (
      <section id={id} className={cn('py-16 md:py-24', className)} {...props}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={cn('py-16 md:py-24', className)}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
      {...props}
    >
      {content}
    </motion.section>
  );
}
