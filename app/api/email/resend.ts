import { Resend } from "resend";

export async function sendContactEmail({
	name,
	email,
	message,
	phone,
	isMessageValid = false,
}: {
	name: string;
	email: string;
	message: string;
	phone: string;
	isMessageValid?: boolean;
}) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const { data, error } = await resend.emails.send({
		from: "Neat Services Website <noreply@neatservicescorp.com>",
		to: isMessageValid
			? ["neatservicescorp@gmail.com"]
			: ["admin@bravia-tech.com"],
		subject: `[WEBSITE] New ${isMessageValid ? "Valid" : "Invalid"} contact received from ${name}`,
		text: `From: ${name}\nEmail: ${email ?? "Not provided"}\nMessage: ${message}\nPhone: ${phone}`,
	});

	if (error) {
		console.error("Resend error:", error);
		throw error;
	}

	return data;
}

export async function sendChatEmail({
	email,
	message,
	isMessageValid = false,
}: {
	email: string;
	message: string;
	isMessageValid?: boolean;
}) {
	const resend = new Resend(process.env.RESEND_API_KEY);

	console.log(`VALID: ${isMessageValid}`);
	const { data, error } = await resend.emails.send({
		from: "Neat Services Website <noreply@neatservicescorp.com>",
		to: isMessageValid
			? ["neatservicescorp@gmail.com"]
			: ["admin@bravia-tech.com"],
		subject: `[WEBSITE CHAT] New ${isMessageValid ? "Valid" : "Invalid"} chat request received from ${email}`,
		text: `Someone wants to be contacted.\nEmail: ${email}\nMessage: ${message}`,
	});

	if (error) {
		console.error("Resend error:", error);
		throw error;
	}

	return data;
}
