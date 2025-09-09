import { NextResponse } from "next/server";
import { sendChatEmail, sendContactEmail } from "./resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (phone && service && name) {
      const data = await sendContactEmail({ name, email, phone, service });
      return NextResponse.json({ success: true, data });
    }

    if (email && message) {
      const data = await sendChatEmail({ email, message });
      return NextResponse.json({ success: true, data });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
