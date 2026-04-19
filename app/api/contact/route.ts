import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(5000),
});

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "abdulnafay486@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, subject, message } = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    html: `
      <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px;">
        <h2 style="margin-bottom: 8px;">New message from your portfolio</h2>
        <p style="color:#666;margin-top:0;">From <strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p>
        <h3 style="margin-bottom:4px;">Subject</h3>
        <p style="margin-top:0;">${escapeHtml(subject)}</p>
        <h3 style="margin-bottom:4px;">Message</h3>
        <p style="white-space: pre-wrap; margin-top:0;">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message ?? "Failed to send email." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
