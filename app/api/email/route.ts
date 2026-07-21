import { NextResponse } from "next/server";
import type { CreateEmailResponseSuccess } from "resend";
import { GenerativeUtils } from "@/app/api/email/utils";
import { sendChatEmail, sendContactEmail } from "./resend";

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, phone, message } = body;

		if (email && message) {
			const genUtils = new GenerativeUtils();
			const isMessageValid = await genUtils.verifyMessageContents(message);

			if (!isMessageValid) {
				console.warn(
					"Message flagged as spam or promotional content:",
					message,
				);
			}

			let data: CreateEmailResponseSuccess;

			if (phone) {
				data = await sendContactEmail({
					name,
					email,
					phone,
					message,
					isMessageValid,
				});
			}

			data = await sendChatEmail({
				email,
				message,
				isMessageValid,
			});

			return NextResponse.json({ success: true, data });
		}

		return NextResponse.json(
			{ error: "Missing required fields" },
			{ status: 400 },
		);
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 },
		);
	}
}
