import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

const REQUIRED_FIELDS = ["pickup", "destination", "date", "time", "passengers", "name", "contact"] as const;

export async function POST(req: NextRequest) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: silently succeed so bots get no signal their submission was rejected.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  for (const field of REQUIRED_FIELDS) {
    if (!data[field] || !data[field].trim()) {
      return NextResponse.json({ ok: false, error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  const from = process.env.MAIL_FROM_BOOKING || process.env.GMAIL_USER;
  const to = process.env.MAIL_TO_BOOKING;

  if (!from || !to) {
    console.error("Booking email not configured: missing MAIL_FROM_BOOKING/MAIL_TO_BOOKING env vars");
    return NextResponse.json({ ok: false, error: "Server not configured" }, { status: 500 });
  }

  const subject = `New Booking Request — ${data.pickup} → ${data.destination}`;
  const text = [
    `Trip type: ${data.tripType || "-"}`,
    `Pickup: ${data.pickup}`,
    `Destination: ${data.destination}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    `Passengers: ${data.passengers}`,
    `Vehicle: ${data.vehicle || "-"}`,
    `Special requirements: ${data.requirements || "-"}`,
    "",
    `Name: ${data.name}`,
    `Contact: ${data.contact}`,
  ].join("\n");

  try {
    await sendMail({
      from: `"Italy Limo Service — Booking" <${from}>`,
      to,
      subject,
      text,
      replyTo: data.contact.includes("@") ? data.contact : undefined,
    });
  } catch (err) {
    console.error("Failed to send booking email", err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
