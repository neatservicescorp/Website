import { Resend } from "resend";

export async function sendContactEmail({
  name,
  email,
  service,
  phone,
}: {
  name: string;
  email: string;
  service: string;
  phone: string;
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "Neat Services Website <noreply@neatservicescorp.com>",
    to: ["neatservicescorp@gmail.com"],
    subject: `[WEBSITE] New contact received from ${name}`,
    text: `From: ${name}\nEmail: ${email}\nService required: ${service}\nPhone: ${phone}`,
  });

  if (error) {
    console.error("Resend error:", error);
    throw error;
  }

  return data;
}
