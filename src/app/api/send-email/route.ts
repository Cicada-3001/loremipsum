import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, company, phone, service, message } = body;

    const html = `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
        <div style="height: 6px; background: linear-gradient(90deg, #f25022, #0078d4, #7fba00);"></div>
        <div style="padding: 40px 40px 32px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 28px;">
            <div style="font-size: 22px; font-weight: 900; color: #111827; letter-spacing: -0.5px;">KOMPAS IT</div>
          </div>
          <h1 style="font-size: 20px; font-weight: 800; color: #111827; margin: 0 0 6px;">📞 New Call Request</h1>
          <p style="font-size: 14px; color: #6b7280; margin: 0 0 28px;">Someone wants to schedule a call. Here are their details:</p>

          <table style="width: 100%; border-collapse: collapse;">
            ${name ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; width: 130px;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #111827;">${name}</td></tr>` : ''}
            ${email ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #0078d4;">${email}</td></tr>` : ''}
            ${company ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #111827;">${company}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; font-weight: 600; color: #111827;">${phone}</td></tr>` : ''}
            ${service ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px;"><span style="display: inline-block; background: #eff6ff; color: #0078d4; font-weight: 700; font-size: 12px; padding: 3px 10px; border-radius: 6px;">${service}</span></td></tr>` : ''}
          </table>

          ${message ? `
          <div style="margin-top: 24px; padding: 16px 20px; background: #f9fafb; border-radius: 10px; border-left: 3px solid #0078d4;">
            <p style="font-size: 12px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px;">Project Details</p>
            <p style="font-size: 14px; color: #374151; line-height: 1.6; margin: 0;">${message}</p>
          </div>` : ''}

          <div style="margin-top: 32px; padding: 20px; background: #f0f9ff; border-radius: 10px; text-align: center;">
            <p style="font-size: 13px; color: #0369a1; font-weight: 600; margin: 0;">Reply directly to this email or call the client at the number provided above.</p>
          </div>
        </div>
        <div style="padding: 16px 40px; background: #f9fafb; border-top: 1px solid #f3f4f6; text-align: center;">
          <p style="font-size: 11px; color: #9ca3af; margin: 0;">© ${new Date().getFullYear()} KompasIT — This is an automated notification from your website.</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'pablocasso20@gmail.com',
      replyTo: email || undefined,
      subject: `📞 New Call Request${name ? ` from ${name}` : ''}${company ? ` @ ${company}` : ''}`,
      html,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
