import { getAdminDb } from "@/lib/firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface TicketPayload {
  name: string;
  email: string;
  category: string;
  title: string;
  description: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  bug: "Nahlásit chybu",
  question: "Otázka k funkci",
  account: "Problém s účtem",
  data: "Žádost o data / výmaz",
  other: "Jiné",
};

async function sendNotificationEmail(ticket: TicketPayload & { id: string }) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) return;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const categoryLabel = CATEGORY_LABELS[ticket.category] ?? ticket.category;

  await transporter.sendMail({
    from: `"Memoroid Support" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `[Ticket #${ticket.id.slice(0, 8)}] ${ticket.title}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #8756F6;">Nový support ticket</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 6px 0; color: #666; width: 120px;">ID ticketu</td><td style="padding: 6px 0; font-weight: bold;">${ticket.id}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Jméno</td><td style="padding: 6px 0;">${ticket.name || "(neuvedeno)"}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">E-mail</td><td style="padding: 6px 0;"><a href="mailto:${ticket.email}">${ticket.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Kategorie</td><td style="padding: 6px 0;">${categoryLabel}</td></tr>
          <tr><td style="padding: 6px 0; color: #666;">Předmět</td><td style="padding: 6px 0; font-weight: bold;">${ticket.title}</td></tr>
        </table>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
        <h3 style="color: #333; margin-bottom: 8px;">Popis</h3>
        <p style="color: #444; line-height: 1.6; white-space: pre-wrap;">${ticket.description}</p>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
        <p style="color: #999; font-size: 12px;">
          Odpovědět uživateli: <a href="mailto:${ticket.email}">${ticket.email}</a><br/>
          Zobrazit v admin panelu: <a href="${process.env.NEXTAUTH_URL ?? ""}/admin">Memoroid Admin</a>
        </p>
      </div>
    `,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body: TicketPayload = await req.json();

    if (!body.email || !body.title || !body.description) {
      return NextResponse.json(
        { error: "Vyplňte všechna povinná pole." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Neplatná e-mailová adresa." },
        { status: 400 }
      );
    }

    const ticket = {
      name: body.name,
      email: body.email,
      category: body.category,
      title: body.title,
      description: body.description,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    const docRef = await getAdminDb().collection("support_tickets").add(ticket);

    await sendNotificationEmail({ ...ticket, id: docRef.id }).catch((err) =>
      console.error("[Email error]", err)
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Ticket error]", err);
    return NextResponse.json(
      { error: "Chyba serveru. Zkuste to prosím znovu." },
      { status: 500 }
    );
  }
}
