'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  company: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || 'Something went wrong');
      }

      setSuccess(true);
      reset();
      toast.success('Message sent!', {
        description: "We'll get back to you within one business day.",
      });

      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      toast.error('Failed to send message', {
        description:
          err instanceof Error ? err.message : 'Please try again later.',
      });
    }
  }

  if (success) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-center space-y-4'>
        <CheckCircle2 className='h-12 w-12 text-green-500' />
        <h3 className='text-xl font-semibold'>Message sent successfully!</h3>
        <p className='text-muted-foreground max-w-sm'>
          Thank you for reaching out. We&apos;ll respond within one business
          day.
        </p>
        <Button variant='outline' onClick={() => setSuccess(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      <div className='grid gap-5 sm:grid-cols-2'>
        <div className='space-y-2'>
          <Label htmlFor='name'>Full name *</Label>
          <Input
            id='name'
            placeholder='Jane Doe'
            {...register('name')}
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className='text-sm text-destructive'>{errors.name.message}</p>
          )}
        </div>
        <div className='space-y-2'>
          <Label htmlFor='email'>Email *</Label>
          <Input
            id='email'
            type='email'
            placeholder='jane@company.com'
            {...register('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className='text-sm text-destructive'>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='company'>Company (optional)</Label>
        <Input id='company' placeholder='Acme Inc.' {...register('company')} />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='subject'>Subject *</Label>
        <Input
          id='subject'
          placeholder='Project inquiry'
          {...register('subject')}
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p className='text-sm text-destructive'>{errors.subject.message}</p>
        )}
      </div>

      <div className='space-y-2'>
        <Label htmlFor='message'>Message *</Label>
        <Textarea
          id='message'
          placeholder='Tell us about your project, goals, and timeline...'
          rows={5}
          {...register('message')}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className='text-sm text-destructive'>{errors.message.message}</p>
        )}
      </div>

      <Button
        type='submit'
        size='lg'
        className='w-full gap-2'
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className='h-4 w-4 animate-spin' />
            Sending...
          </>
        ) : (
          <>
            <Send className='h-4 w-4' />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
