import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
  company: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message, company } = parsed.data;

    // Optional: save to database with Prisma
    // Uncomment when Prisma is configured
    /*
    try {
      const { prisma } = await import("@/lib/prisma");
      await prisma.inquiry.create({
        data: { name, email, subject, message, company: company || null },
      });
    } catch (dbErr) {
      console.error("DB save failed (non-blocking):", dbErr);
    }
    */

    // Send email via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'owner@example.com';

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev',
        to: toEmail,
        replyTo: email,
        subject: `[Contact] ${subject}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
        `,
      });
    } else {
      // Development fallback – log to console
      console.log('=== Contact Form Submission ===');
      console.log({ name, email, subject, message, company });
      console.log('RESEND_API_KEY not set – email not sent.');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
