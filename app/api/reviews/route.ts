import { NextResponse } from "next/server";
import { ReviewsHandler } from "./handler";

export async function GET() {
  try {
    const handler = new ReviewsHandler();
    const reviews = await handler.getReviews();
    return NextResponse.json({ data: reviews }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: "Error fetching reviews: " + (e as Error).message },
      { status: 500 }
    );
  }
}
