import { Resend } from "resend";
import { NextResponse } from "next/server";
import { bookACallEmailHtml } from "./email";

const resend = new Resend(process.env.RESEND_API_KEY);

const MIN_FORM_MS = 3000;

export async function POST(request: Request) {
  const { name, email, company, challenge, website, _t } = await request.json();

  // Honeypot — bots fill hidden fields, humans don't
  if (website) {
    return NextResponse.json({ success: true });
  }

  // Timing check — bots submit instantly
  if (typeof _t === "number" && Date.now() - _t < MIN_FORM_MS) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "SurgentAI <onboarding@resend.dev>",
    to: "dennis@dennisacosta.com",
    replyTo: email,
    subject: `Discovery call request from ${name}`,
    html: bookACallEmailHtml({ name, email, company, challenge }),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
