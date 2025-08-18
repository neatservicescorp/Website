import { NextResponse } from "next/server";
import { sendContactEmail } from "./resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service } = body;

    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const data = await sendContactEmail({ name, email, phone, service });

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
