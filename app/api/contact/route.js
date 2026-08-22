import { NextResponse } from "next/server";

// Forwards contact-form submissions to a Google Apps Script Web App bound to
// the business's Google Sheet, which appends each submission as a new row.
// See /GOOGLE_SHEET_SETUP.md for how to create and deploy that Web App, and
// set its URL as the GOOGLE_SHEET_WEBHOOK_URL environment variable (locally
// in .env.local, and in Netlify under Site configuration → Environment
// variables). The webhook URL is intentionally never hardcoded here so it
// isn't committed to the repo.

export async function POST(request) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL is not set");
    return NextResponse.json(
      { ok: false, error: "Form submission isn't configured yet." },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, phone, service, date, message, language } = body ?? {};

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 400 }
    );
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name: name.trim(),
    phone: phone.trim(),
    service: service ?? "",
    date: date ?? "",
    message: message?.trim() ?? "",
    language: language ?? "",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Sheet webhook responded with ${res.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to forward contact submission to Google Sheet:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your submission. Please try again." },
      { status: 502 }
    );
  }
}
