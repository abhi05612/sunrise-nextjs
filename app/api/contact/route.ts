import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: process.env.TO_EMAIL!,
    subject: subject || `New enquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "—"}</p>
      <p><b>Subject:</b> ${subject || "—"}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
