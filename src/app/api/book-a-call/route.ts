import { Resend } from "resend";
import { NextResponse } from "next/server";
import { bookACallEmailHtml } from "./email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, company, challenge } = await request.json();

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
