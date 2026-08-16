import { NextResponse } from "next/server";
import { Resend } from "resend";

const NOTIFY_EMAIL = "sriram@avataq.in";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, company, service, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  // onboarding@resend.dev only delivers to the Resend account owner's email until
  // avataq.in is verified in Resend — swap the from address once that's done.
  const { error } = await resend.emails.send({
    from: "AVATAQ Website <onboarding@resend.dev>",
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "—"}`,
      `Service interest: ${service || "—"}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
