import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/layout/section';
import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with us. We respond within one business day.',
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      <Section withAnimation={false} className='pt-12 md:pt-20'>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium text-primary mb-2'>Contact</p>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
            Let&apos;s talk
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            Tell us about your project. We typically respond within one business
            day.
          </p>
        </div>
      </Section>

      <Section>
        <div className='grid gap-12 lg:grid-cols-5'>
          {/* Form */}
          <div className='lg:col-span-3'>
            <Card>
              <CardHeader>
                <CardTitle>Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Info */}
          <div className='lg:col-span-2 space-y-6'>
            <div className='space-y-4'>
              <h3 className='font-semibold'>Contact details</h3>
              <ul className='space-y-4 text-sm'>
                <li className='flex gap-3'>
                  <Mail className='h-5 w-5 text-primary shrink-0' />
                  <div>
                    <p className='font-medium'>Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className='flex gap-3'>
                  <Phone className='h-5 w-5 text-primary shrink-0' />
                  <div>
                    <p className='font-medium'>Phone</p>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      {contact.phone}
                    </a>
                  </div>
                </li>
                <li className='flex gap-3'>
                  <MapPin className='h-5 w-5 text-primary shrink-0' />
                  <div>
                    <p className='font-medium'>Office</p>
                    <p className='text-muted-foreground'>{contact.address}</p>
                  </div>
                </li>
                <li className='flex gap-3'>
                  <Clock className='h-5 w-5 text-primary shrink-0' />
                  <div>
                    <p className='font-medium'>Hours</p>
                    <p className='text-muted-foreground'>{contact.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map placeholder */}
            <div className='aspect-video rounded-xl border bg-muted/50 flex items-center justify-center'>
              <p className='text-sm text-muted-foreground'>
                Map embed placeholder
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
